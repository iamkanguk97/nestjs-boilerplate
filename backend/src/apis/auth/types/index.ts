import { AuthConstant } from "../constants";

export namespace AuthType {
    export type OAUTH_PROVIDER = typeof AuthConstant.Enum.OAUTH_PROVIDER[keyof typeof AuthConstant.Enum.OAUTH_PROVIDER];
}