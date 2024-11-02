import { Controller, Get } from '@nestjs/common';
import { ClientService } from '../services/client.service';

@Controller()
export class ClientController {
    constructor(private readonly appService: ClientService) {}
    
    @Get('/client')
    getHello(): string {
        return this.appService.getHello();
    }
}
