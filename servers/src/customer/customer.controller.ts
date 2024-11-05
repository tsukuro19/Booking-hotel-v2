import { Body, Controller, Delete, Get, HttpException, HttpStatus, Put, Req, Res } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Request, Response } from 'express';
import { responseConfig } from 'src/config/response_config';
import { ApiBadRequestResponse, ApiBody, ApiCreatedResponse, ApiOperation } from '@nestjs/swagger';
import { CustomerDto } from './dto/customer.dto';

@Controller('customer')
export class CustomerController {
    constructor(private readonly customerService:CustomerService){}
    @ApiOperation({
        summary:"Fetch all customers"
    })
    @ApiCreatedResponse({
        description:"Fetch successfully"
    })
    @ApiBadRequestResponse({
        description:"Invalid data provided"
    })
    @Get()
    async getAllUsers(@Req() req:Request,@Res() res:Response):Promise<any>{
        try{
            const result=await this.customerService.getAllCustomers();
            return responseConfig(res,result,"Fetch Successfully",200);
        }catch(e){
            return responseConfig(res,e,"Internal Server",500);
        }
    }

    @ApiOperation({
        summary:"Update information user"
    })
    @ApiCreatedResponse({
        description:"Update successfully"
    })
    @ApiBadRequestResponse({
        description:"Invalid data provided"
    })
    @Put()
    async update(@Req() req:Request,@Res() res:Response,@Body() data:CustomerDto):Promise<any>{
        try{
            await this.customerService.updateCustomer(data);
            return responseConfig(res,"Success","Update successfully",200);
        }catch(e){
            return responseConfig(res,e,"Internal Server",500);
        }
    }

    @ApiOperation({
        summary:"Delete user"
    })
    @ApiCreatedResponse({
        description:"Delete successfully"
    })
    @ApiBadRequestResponse({
        description:"Invalid data provided"
    })
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                email: {
                    type: 'string',
                    example: 'test123@gmail.com',
                    description: 'Email of the user to be deleted'
                }
            },
            required: ['email']
        }
    })
    @Delete()
    async delete(@Req() req:Request,@Res() res:Response,@Body('email') email:string):Promise<any>{
        try{
            await this.customerService.deleteCustomer(email);
            return responseConfig(res,"Success","Delete successfully",200);
        }catch(e){
            return responseConfig(res,e,"Internal Server",500);
        }
    }
}
