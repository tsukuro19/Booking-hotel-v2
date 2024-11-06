import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";

export class RegisterUserDto {
    @ApiProperty({
        description:"Email of the manager",
        required:true,
        type:"string",
        example:"vongola392112@gmail.com"
    })
    @IsEmail()
    @IsString()
    email:string;
    @ApiProperty({
        description:"Password of the manager",
        required:true,
        type:"string",
        example:"thien12042003"
    })
    @IsString()
    password:string;
    @ApiProperty({
        description:"Retype Password of the manager",
        required:true,
        type:"string",
        example:"thien12042003"
    })
    @IsString()
    retype_password:string
    @ApiProperty({
        description:"Username of the manager",
        required:false,
        type:"string",
        example:""
    })
    @IsString()
    username:string
    @ApiProperty({
        description:"First name of the manager",
        required:false,
        type:"string",
        example:""
    })
    @IsString()
    first_name:string
    @ApiProperty({
        description:"Last name of the manager",
        required:false,
        type:"string",
        example:""
    })
    @IsString()
    last_name:string;
    @ApiProperty({
        description:"Phone number of the manager",
        required:false,
        type:"string",
        example:""
    })
    @IsString()
    phone_number:string;
}
