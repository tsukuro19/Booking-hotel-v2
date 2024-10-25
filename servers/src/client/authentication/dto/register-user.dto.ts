import { IsString } from "class-validator";

export class RegisterUserDto {
    @IsString()
    email:string;
    @IsString()
    password:string;
    @IsString()
    retype_password:string
    @IsString()
    username:string
    @IsString()
    first_name:string
    @IsString()
    last_name:string;
    @IsString()
    phone_number:string;
}
