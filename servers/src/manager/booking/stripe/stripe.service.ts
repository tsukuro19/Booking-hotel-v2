import Stripe from 'stripe';
import { Injectable } from '@nestjs/common';

@Injectable()
export class StripeService {
  private stripe: Stripe;

  constructor() {
    this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY,{
      apiVersion: '2024-11-20.acacia',
    });
  }

  createPaymentIntent(amount: number) {
    return this.stripe.paymentIntents.create({
      amount,
      currency: 'usd',
    });
  }

  constructWebhookEvent(payload: any, signature: string, secret: string) {
    return this.stripe.webhooks.constructEvent(payload, signature, secret);
  }

  async handleWebhook(event: Stripe.Event) {
    // Handle the event based on its type
    console.log(`Handling event of type: ${event.type}`);
    // Add your webhook handling logic here
  }
}
