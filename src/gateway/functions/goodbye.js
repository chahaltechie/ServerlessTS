"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const CreateSecretHandler_1 = require("../secret/create/CreateSecretHandler");
const CreateSecretUseCase_1 = require("../../core/usecase/secret/create/CreateSecretUseCase");
const SecretInMemoryPersistence_1 = require("../../infrastructure/data/memory/SecretInMemoryPersistence");
function goodbye(_event) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const test = _event;
            const createSecretHandler = new CreateSecretHandler_1.CreateSecretHandler(new CreateSecretUseCase_1.CreateSecretUseCase(new SecretInMemoryPersistence_1.SecretInMemoryPersistence()));
            const res = yield createSecretHandler.ProcessRequest(_event);
            const response = {
                statusCode: 200,
                body: 'HELLO YOU ARE MY FRIEND!!!',
            };
            return response;
        }
        catch (err) {
            return {
                statusCode: 500,
                body: 'An error occured',
            };
        }
    });
}
exports.handler = goodbye;
//# sourceMappingURL=goodbye.js.map