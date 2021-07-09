"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSecretHandler = void 0;
const BaseGateway_1 = require("../../definition/BaseGateway");
const typescript_is_1 = require("typescript-is");
class CreateSecretHandler extends BaseGateway_1.BaseGateway {
    ProcessRequest(req) {
        return new Promise(((resolve, reject) => {
            try {
                const abc = typescript_is_1.assertType(req.body);
                const secretReqDto = JSON.parse(req.body);
                const response = this.useCase.execute(secretReqDto);
                const parsedBody = JSON.parse(req.body || '');
                const res = {
                    statusCode: 200,
                    body: JSON.stringify(response),
                };
                resolve(res);
            }
            catch (err) {
                const errResult = {
                    statusCode: 500,
                    body: `An error occurred ${JSON.stringify(err)}`,
                };
                resolve(errResult);
            }
        }));
    }
}
exports.CreateSecretHandler = CreateSecretHandler;
//# sourceMappingURL=CreateSecretHandler.js.map