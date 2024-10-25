import { Controller, Get, HttpException, HttpStatus, Req, Res } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Request, Response } from 'express';
import { responseConfig } from 'src/config/response_config';

@Controller('customer')
export class CustomerController {
    constructor(private readonly customerService:CustomerService){}

    @Get()
    async getAllUsers(@Req() req:Request,@Res() res:Response):Promise<any>{
        try{
            const result=await this.customerService.getAllCustomers();
            return responseConfig(res,result,"Fetch Successfully",200);
        }catch(e){
            return responseConfig(res,e,"Internal Server",500);
        }
    }
}
