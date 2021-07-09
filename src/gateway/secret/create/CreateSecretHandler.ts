import {BaseGateway} from "../../definition/BaseGateway";
import {APIGatewayProxyEvent, APIGatewayProxyResult} from "aws-lambda";
import {CreateSecretUseCase} from "../../../core/usecase/secret/create/CreateSecretUseCase";
import {CreateSecretRequestDto} from "../../../core/usecase/secret/create/CreateSecretRequestDto";
import { assertType } from 'typescript-is';

export class CreateSecretHandler extends BaseGateway<CreateSecretUseCase>{
    
    public ProcessRequest(req: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
        return new Promise(((resolve, reject) => {
            try {
                const abc = assertType<CreateSecretRequestDto>(req.body);
                const secretReqDto : CreateSecretRequestDto = JSON.parse(req.body!) as CreateSecretRequestDto;
                const response = this.useCase.execute(secretReqDto);
                const parsedBody = JSON.parse(req.body || '');
                const res = {
                    statusCode: 200,
                    body: JSON.stringify(response),
                };
                resolve(res);
            } catch (err) {
               const errResult = {
                    statusCode: 500,
                    body: `An error occurred ${JSON.stringify(err)}`,
                };
               resolve(errResult);
            }
        }));
    }
    
}