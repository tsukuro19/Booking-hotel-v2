import { Body, Controller, Delete, Get, Put, Req, Res } from '@nestjs/common';
import { ManagerService } from '../service/manager.service';
import { ApiBadRequestResponse, ApiBody, ApiCreatedResponse, ApiOperation } from '@nestjs/swagger';
import { responseConfig } from 'src/config/response_config';
import { ManagerDto } from '../dto/manager.dto';

@Controller()
export class ManagerController {
    constructor(private readonly managerService: ManagerService) {}


    @ApiOperation({
        summary:"Fetch all managers"
    })
    @ApiCreatedResponse({
        description:"Fetch successfully"
    })
    @ApiBadRequestResponse({
        description:"Invalid data provided"
    })
    @Get('/manager')
    async getAllUsers(@Req() req:Request,@Res() res:Response):Promise<any>{
        try{
            const result=await this.managerService.getAllManagers();
            return responseConfig(res,result,"Fetch Successfully",200);
        }catch(e){
            return responseConfig(res,e,"Internal Server",500);
        }
    }

    @ApiOperation({
        summary:"Update information manager"
    })
    @ApiCreatedResponse({
        description:"Update successfully"
    })
    @ApiBadRequestResponse({
        description:"Invalid data provided"
    })
    @Put('/manager')
    async update(@Req() req:Request,@Res() res:Response,@Body() data:ManagerDto):Promise<any>{
        try{
            await this.managerService.updateManager(data);
            return responseConfig(res,"Success","Update successfully",200);
        }catch(e){
            return responseConfig(res,e,"Internal Server",500);
        }
    }

    @ApiOperation({
        summary:"Delete manager"
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
    @Delete('/manager')
    async delete(@Req() req:Request,@Res() res:Response,@Body('email') email:string):Promise<any>{
        try{
            await this.managerService.deleteManager(email);
            return responseConfig(res,"Success","Delete successfully",200);
        }catch(e){
            return responseConfig(res,e,"Internal Server",500);
        }
    }
}
