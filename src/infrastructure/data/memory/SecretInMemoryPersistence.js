"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecretInMemoryPersistence = void 0;
const uuid_1 = require("uuid");
class SecretInMemoryPersistence {
    constructor() {
        this.secrets = [];
    }
    createItem(item) {
        return new Promise((resolve, reject) => {
            item.id = uuid_1.v4();
            item.createdOn = new Date().toISOString();
            item.modifiedOn = new Date().toISOString();
            this.secrets.push(item);
            resolve(item);
        });
    }
    getAllSecrets() {
        return Promise.resolve(this.secrets);
    }
    getItem(id) {
        return Promise.resolve(this.secrets.find(secret => secret.id === id));
    }
    getItems(query) {
        return Promise.resolve(this.secrets);
    }
    updateItem(item) {
        return new Promise(((resolve, reject) => {
            const index = this.secrets.findIndex(value => value.id === item.id);
            this.secrets[index] = item;
            resolve(item);
        }));
    }
}
exports.SecretInMemoryPersistence = SecretInMemoryPersistence;
//# sourceMappingURL=SecretInMemoryPersistence.js.map