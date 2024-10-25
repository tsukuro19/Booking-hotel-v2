import { Controller, Get } from '@nestjs/common';
import { ManagerService } from '../service/manager.service';

@Controller()
export class ManagerController {
    constructor(private readonly appService: ManagerService) {}

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }
}
