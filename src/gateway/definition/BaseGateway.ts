import {APIGatewayProxyEvent, APIGatewayProxyResult} from "aws-lambda";
import {UseCaseBase} from "../../core/common/UseCaseBase";

export abstract class BaseGateway<T extends UseCaseBase>
{
    protected useCase : UseCaseBase;
    constructor(useCase : T) {
        this.useCase = useCase;
    }
    public abstract  ProcessRequest(req: APIGatewayProxyEvent) : Promise<APIGatewayProxyResult>;
}