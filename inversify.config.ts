// import {Container} from "inversify";
// import {ISecretRepository} from "@src/core/common/interface/ISecretRepository";
// import {TYPES} from "./types";
// import {BaseGateway} from "@src/gateway/definition/BaseGateway";
// import {CreateSecretUseCase} from "@src/core/usecase/secret/create/CreateSecretUseCase";
// import {CreateSecretHandler} from "@src/gateway/secret/create/CreateSecretHandler";
// import {SecretInMemoryPersistence} from "@src/infrastructure/data/memory/SecretInMemoryPersistence";
//
// const container = new Container();
//
// container.bind<ISecretRepository>(TYPES.ISecretRepository).to(SecretInMemoryPersistence);
// container.bind<BaseGateway<CreateSecretUseCase>>(TYPES.BaseGateway).to(CreateSecretHandler);
//
// export {container};