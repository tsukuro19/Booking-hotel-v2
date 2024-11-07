import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/client/common/middleware/jwt/jwt.middleware';

@Controller('/manager/validate-token')
@UseGuards(JwtAuthGuard)  // Use guard on protected routes
export class ValidateTokenController {
    @ApiOperation({
        summary:"Validate token manager",
        description:"Xac thuc token xem con thoi gian hieu luc cua token khong, Neu con thi se tiep tuc dang nhap ma khong can password, nguoc lai phai dang nhap bang password"
    })
    @ApiCreatedResponse({
        description:"Validate token successfully"
    })
    @ApiBadRequestResponse({
        description:"Invalid data provided"
    })
    @Get()
    getData() {
        return { message: 'Protected data' };
    }
}
