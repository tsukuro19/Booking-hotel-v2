import { Controller, Post, Body, Headers, HttpStatus, HttpCode } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBody, ApiResponse } from '@nestjs/swagger';
import { StripeService } from './stripe.service';
import { BookingService } from '../booking.service';

@ApiTags('Stripe')
@Controller('stripe')
export class StripeController {
  constructor(
    private readonly stripeService: StripeService,
    private readonly bookingService: BookingService,
  ) {}

  @Post('create-payment-intent')
  @ApiOperation({ summary: 'Create a Payment Intent' })
  @ApiBody({
    description: 'Amount to charge for the payment intent',
    schema: {
      type: 'object',
      properties: {
        amount: { type: 'number', description: 'Amount to be charged (in cents)' },
      },
      required: ['amount'],
    },
  })  // Correct usage of schema in @ApiBody
  @ApiResponse({
    status: 200,
    description: 'Client Secret for Stripe Payment Intent',
    schema: {
      type: 'object',
      properties: {
        clientSecret: { type: 'string' },
      },
    },
  })
  async createPaymentIntent(@Body() body: { amount: number }) {
    const { amount } = body;
    const clientSecret = await this.stripeService.createPaymentIntent(amount);
    return { clientSecret };
  }

  @Post('webhook')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Handle Stripe Webhook' })
  @ApiResponse({
    status: 200,
    description: 'Webhook received and processed successfully',
    schema: {
      type: 'object',
      properties: {
        received: { type: 'boolean', example: true },
      },
    },
  })
  async handleStripeWebhook(
    @Body() payload: any,
    @Headers('stripe-signature') signature: string,
  ) {
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;
    let event;

    try {
      event = this.stripeService.constructWebhookEvent(payload, signature, endpointSecret);
    } catch (err) {
      console.error('Webhook signature verification failed.', err.message);
      return { error: 'Webhook signature verification failed.' };
    }

    await this.stripeService.handleWebhook(event);
    return { received: true };
  }
}
