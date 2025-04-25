import { Controller, Param, Post } from "@nestjs/common";
import { AuthType } from "./types";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    /**
     * Router) Social Login with Strategy Pattern.
     * Provider(Vendor) will be given by path-variable.
     * 
     * @param provider
     * @author Jason
     */
    @Post('social-login/:provider')
    public async postSocialLogin(@Param('provider') provider: AuthType.OAUTH_PROVIDER) {
        console.log(provider);
        return;
    }
}