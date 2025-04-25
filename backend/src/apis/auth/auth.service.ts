import { Injectable } from "@nestjs/common";
import { AuthType } from "./types";
import { AuthConstant } from "./constants";

@Injectable()
export class AuthService {
    private readonly socialLoginStrategyMap: Record<AuthType.OAUTH_PROVIDER, unknown>;
    
    constructor() {
        this.socialLoginStrategyMap = {
            [AuthConstant.Enum.OAUTH_PROVIDER.KAKAO]: 1,
            [AuthConstant.Enum.OAUTH_PROVIDER.GOOGLE]: 2,
            [AuthConstant.Enum.OAUTH_PROVIDER.NAVER]: 3,
            [AuthConstant.Enum.OAUTH_PROVIDER.APPLE]: 4,
        }
    }

    public async createSocialLogin() {}
}