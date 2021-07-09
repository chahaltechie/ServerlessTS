import {IRepository} from "./IRepository";
import {Secret} from "../../entity/Secret";


export interface ISecretRepository extends IRepository<Secret>{
    getAllSecrets():Promise<Secret[] | undefined>;
}


