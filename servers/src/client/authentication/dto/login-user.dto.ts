import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";

export class LoginUserDto {
    @ApiProperty({
        description:"Email of the user",
        required:true,
        type:"string",
        example:"vongola392112@gmail.com"
    })
    @IsEmail()
    @IsString()
    email:string;
    @ApiProperty({
        description:"Password of the user",
        required:true,
        type:"string",
        example:"thien12042003"
    })
    @IsString()
    password:string;
}
