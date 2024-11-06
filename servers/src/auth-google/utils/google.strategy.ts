import { PassportStrategy } from "@nestjs/passport";
import { Profile, Strategy } from "passport-google-oauth20";
import { AuthGoogleService } from "../auth-google.service";
import { Inject } from "@nestjs/common";

export class googleStrategy extends PassportStrategy(Strategy,'google') {
    constructor(
        @Inject(AuthGoogleService)private authGoogleService:AuthGoogleService
    ){
        super({
            clientID:process.env.CLIENT_ID,
            clientSecret:process.env.CLIENT_SECRET,
            callbackURL:process.env.CALLBACK_URL_CLIENT,
            scope:['profile','email'],
        })
    }

    async validate(accessToken: string, refresh: string, profile: Profile) {
        const user=await this.authGoogleService.validateUserCustomer({
            email:profile.emails[0].value,
            first_name:profile.name.givenName,
            last_name:profile.name.familyName,
            username:profile.displayName,
            phone_number:""
        })
        return user || null;
    }

}