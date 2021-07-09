import {Secret} from "../../../entity/Secret";

export class CreateSecretResponseDto {
    secret?:Secret;
    hasError:boolean;
    constructor(secret:Secret | undefined,hasError:boolean) {
        this.secret = secret;
        this.hasError = hasError;
    }
}