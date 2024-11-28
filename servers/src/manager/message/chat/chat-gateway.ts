import { WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody, ConnectedSocket } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Inject } from '@nestjs/common';
import { PrismaModuleService } from 'src/prisma_module/prisma_module.service';

@WebSocketGateway(8081, {
  transports: ['websocket'], 
  cors: {
    origin: ['http://localhost:3000', 'http://localhost:3001'],  // Allow all origins
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
    credentials: true,  // Allows cookies to be sent with the request
  },
})
export class ChatGateWay {
  @WebSocketServer() server: Server;

  // Inject PrismaService to handle database queries
  constructor(private prismaService: PrismaModuleService) {}

  // Store user connections
  private users: Map<string, Socket> = new Map();

  // When a client connects
  handleConnection(client: Socket) {
    console.log('New connection:', client.id);
    // You can optionally associate the client ID with a user in your database if needed
    this.users.set(client.id, client);
  }

  // When a client disconnects
  handleDisconnect(client: Socket) {
    this.users.delete(client.id);
    console.log('Disconnected:', client.id);
  }

  // Handle incoming messages
  @SubscribeMessage('message')
  async handleNewMessage(
    @MessageBody() message: { senderId: string, receiverId: string, content: string, customerId: number, managerId: number },
    @ConnectedSocket() client: Socket,
  ) {
    const { senderId, receiverId, content, customerId, managerId } = message;

    try {
      // Save the message to the database
      const newMessage = await this.prismaService.message.create({
        data: {
          senderId: parseInt(senderId),
          receiverId: parseInt(receiverId),
          content: content,
          sentAt: new Date(),
          customerId: customerId,
          managerId: managerId,
        },
      });

      console.log('Message saved to DB:', newMessage);

      // Send the message to the receiver
      this.sendMessageToReceiver(senderId, receiverId, newMessage.content);
    } catch (error) {
      console.error('Error handling message:', error);
      // You may want to handle the error or notify the client about failure
      client.emit('error', 'Failed to send message');
    }
  }

  // Send message to the receiver via WebSocket
  sendMessageToReceiver(senderId: string, receiverId: string, content: string) {
    const receiverSocket = this.users.get(receiverId);
    if (receiverSocket) {
      receiverSocket.emit('message', { senderId, content });
      console.log(`Message sent to receiver ${receiverId}`);
    } else {
      console.log(`Receiver ${receiverId} is not connected`);
    }
  }
}
