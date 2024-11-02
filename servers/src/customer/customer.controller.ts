import { Controller, Get, HttpException, HttpStatus, Put, Req, Res } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Request, Response } from 'express';
import { responseConfig } from 'src/config/response_config';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiOperation } from '@nestjs/swagger';

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
    async update(@Req() req:Request,@Res() res:Response):Promise<any>{
        
    }
}
