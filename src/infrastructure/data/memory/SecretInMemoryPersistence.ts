import {v4 as uuid} from 'uuid';
import {injectable} from "inversify";
import {ISecretRepository} from "../../../core/common/interface/ISecretRepository";
import {Secret} from "../../../core/entity/Secret";

export class SecretInMemoryPersistence implements ISecretRepository{
    secrets: Secret[];
    constructor() {
        this.secrets = [];
    }
    createItem(item: Secret): Promise<Secret> {
        return new Promise<Secret>((resolve, reject) => {
            item.id = uuid();
            item.createdOn = new Date().toISOString();
            item.modifiedOn = new Date().toISOString();
            this.secrets.push(item);
            resolve(item)
        });
    }

    getAllSecrets(): Promise<Secret[] | undefined> {
        return Promise.resolve(this.secrets);
    }

    getItem(id: string): Promise<Secret | undefined> {
        return Promise.resolve(this.secrets.find(secret => secret.id === id));
    }

    getItems(query: string): Promise<Secret[] | undefined> {
        return Promise.resolve(this.secrets);
    }

    updateItem(item: Secret): Promise<Secret | undefined> {
        return new Promise(((resolve, reject) => {
            const index = this.secrets.findIndex(value => value.id === item.id);
            this.secrets[index] = item;
            resolve(item);
        }));
    }

}