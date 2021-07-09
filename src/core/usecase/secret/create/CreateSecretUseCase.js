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
exports.CreateSecretUseCase = void 0;
const CreateSecretResponseDto_1 = require("./CreateSecretResponseDto");
const Secret_1 = require("../../../entity/Secret");
class CreateSecretUseCase {
    constructor(secretRepository) {
        this.secretRepository = secretRepository;
    }
    execute(req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const secret = new Secret_1.Secret(req.title, req.description, Secret_1.Importance.HIGH, req.secrets);
                const result = yield this.secretRepository.createItem(secret);
                return Promise.resolve(new CreateSecretResponseDto_1.CreateSecretResponseDto(secret, false));
            }
            catch (e) {
                return Promise.resolve(new CreateSecretResponseDto_1.CreateSecretResponseDto(undefined, true));
            }
        });
    }
}
exports.CreateSecretUseCase = CreateSecretUseCase;
//# sourceMappingURL=CreateSecretUseCase.js.map