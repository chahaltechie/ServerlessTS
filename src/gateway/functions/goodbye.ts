// import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

// export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
//     //const createSecretHandler = new CreateSecretHandler(new CreateSecretUseCase(new SecretInMemoryPersistence()));
//     //return createSecretHandler.ProcessRequest(event);
//     try {
//         const parsedBody = JSON.parse(event.body || '');
//         //const createSecretHandler = new CreateSecretHandler(new CreateSecretUseCase(new SecretInMemoryPersistence()));
//         return {
//             statusCode: 200,
//             body: `Goodbye ${parsedBody?.name}`,
//         };
//     } catch (err) {
//         return {
//             statusCode: 500,
//             body: 'An error occured',
//         };
//     }
// };
import {
    APIGatewayEventRequestContext,
    APIGatewayProxyEvent,
    APIGatewayProxyHandler,
    APIGatewayProxyResult,
    Context
} from 'aws-lambda';
import { CreateSecretHandler } from '../secret/create/CreateSecretHandler';
import {CreateSecretUseCase} from "../../core/usecase/secret/create/CreateSecretUseCase";
import {SecretInMemoryPersistence} from "../../infrastructure/data/memory/SecretInMemoryPersistence";
import {create} from "domain";

//const handler : APIGatewayProxyHandler = 
    async function goodbye(_event: APIGatewayProxyEvent) : Promise<APIGatewayProxyResult> {
    try {
        const test = _event;
        const createSecretHandler = new CreateSecretHandler(new CreateSecretUseCase(new SecretInMemoryPersistence()));
        const res = await createSecretHandler.ProcessRequest(_event);
        const response = {
            statusCode: 200,
            body: 'HELLO YOU ARE MY FRIEND!!!',
        };
        return response;
    } catch (err) {
        return {
            statusCode: 500,
            body: 'An error occured',
        };
    }
}

export const handler =  goodbye;
