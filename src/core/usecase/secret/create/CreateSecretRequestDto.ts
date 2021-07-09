import {SecretItem} from "../../../entity/Secret";

export interface CreateSecretRequestDto {   
    title:string,
    description: string,
    secrets:Array<SecretItem>;
}