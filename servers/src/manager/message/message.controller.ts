import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { MessageService } from './message.service';
import { ApiTags, ApiOperation, ApiParam, ApiBody } from '@nestjs/swagger';

@ApiTags('Manager Messages')
@Controller('/manager/messages')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post('/create')
  @ApiOperation({ summary: 'Create a new message' })
  @ApiBody({
    description: 'Message data to be created',
    schema: {
      type: 'object',
      properties: {
        content: { type: 'string' },
        senderId: { type: 'number' },
        receiverId: { type: 'number' },
        customerId: { type: 'number' },
        managerId: { type: 'number' },
      },
    },
  })
  async createMessage(@Body() messageData: any) {
    return this.messageService.createMessage(messageData);
  }

  @Get('/manager/:managerId')
  @ApiOperation({ summary: 'Get messages by managerId' })
  @ApiParam({ name: 'managerId', type: 'number', description: 'Manager ID' })
  async getMessageByManagerId(@Param('managerId') managerId: number) {
    return this.messageService.getMessageByManagerId(managerId);
  }

  @Get('/list/customers/:managerId')
  @ApiOperation({ summary: 'Get unique customers who messaged a specific manager' })
  @ApiParam({ name: 'managerId', type: 'number', description: 'Manager ID' })
  async getListCustomerMessageWithManagerId(@Param('managerId') managerId: number) {
    return this.messageService.getListCustomerMessageWithManagerId(managerId);
  }

  @Get('/content/:managerId/:customerId')
  @ApiOperation({ summary: 'Get messages between a manager and a specific customer' })
  @ApiParam({ name: 'managerId', type: 'number', description: 'Manager ID' })
  @ApiParam({ name: 'customerId', type: 'number', description: 'Customer ID' })
  async getContentMessageByManagerIdAndCustomerId(
    @Param('managerId') managerId: number,
    @Param('customerId') customerId: number,
  ) {
    return this.messageService.getContentMessageByManagerIdAndCustomerId(managerId, customerId);
  }

  @Get('/customer/:customerId')
  @ApiOperation({ summary: 'Get messages by customerId' })
  @ApiParam({ name: 'customerId', type: 'number', description: 'Customer ID' })
  async getMessageByCustomerId(@Param('customerId') customerId: number) {
    return this.messageService.getMessageByCustomerId(customerId);
  }

  @Get('/list/managers/:customerId')
  @ApiOperation({ summary: 'Get unique managers who messaged a specific customer' })
  @ApiParam({ name: 'customerId', type: 'number', description: 'Customer ID' })
  async getListCustomerMessageWithCustomerId(@Param('customerId') customerId: number) {
    return this.messageService.getListCustomerMessageWithCustomerId(customerId);
  }
}
