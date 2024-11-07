import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class UpdatePasswordDto {
    @ApiProperty({
        description:"Email of the manager",
        required:true,
        type:"string",
        example:"vongola392112@gmail.com"
    })
    @IsString()
    email:string;
    @ApiProperty({
        description:"Old Password of the manager",
        required:true,
        type:"string",
        example:"thien12042003"
    })
    @IsString()
    oldPassword:string;
    @ApiProperty({
        description:"Password of the manager",
        required:true,
        type:"string",
        example:"12042003thien"
    })
    @IsString()
    password:string;
    @ApiProperty({
        description:"Retype Password of the manager",
        required:true,
        type:"string",
        example:"12042003thien"
    })
    @IsString()
    retype_password:string
}