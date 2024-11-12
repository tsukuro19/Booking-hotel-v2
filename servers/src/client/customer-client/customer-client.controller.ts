import { Body, Controller, Get, Param, Put, Req, Request, Res, Response } from '@nestjs/common';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CustomerClientService } from './customer-client.service';
import { responseConfig } from 'src/config/response_config';

@ApiTags('Information Client')
@Controller('client/customer-client')
export class CustomerClientController {
    constructor(
        private readonly customerClientService: CustomerClientService
    ) { }

    @ApiOperation({
        summary: "Take information customer by id"
    })
    @ApiCreatedResponse({
        description: "Fetch all blog successfully"
    })
    @ApiBadRequestResponse({
        description: "Invalid data provided"
    })
    @Get(':id')
    async getCustomerClientById(
        @Param('id') customerId: number
    ) {
        return await this.customerClientService.getCustomerClientById(customerId);
    }

    @ApiOperation({
        summary: "Update customer information by id"
    })
    @ApiCreatedResponse({
        description: "Update customer information successfully"
    })
    @ApiBadRequestResponse({
        description: "Invalid data provided"
    })
    @Put(':id')
    async updateCustomerClientById(
        @Param('id') customerId: number, 
        @Req() req: Request, 
        @Res() res: Response, 
        @Body() data: any
    ) {
        try {
            const result = await this.customerClientService.updateCustomerClientById(customerId, data);
            return responseConfig(res, result, "Update password success", 200);  // Make sure to return the updated customer information
        } catch (error) {
            return responseConfig(res, error, "Update password success", 200);
        }
    }
}
