import {CreateSecretResponseDto} from "./CreateSecretResponseDto";
import {CreateSecretRequestDto} from "./CreateSecretRequestDto";
import {UseCaseBase} from "../../../common/UseCaseBase";
import {ISecretRepository} from "../../../common/interface/ISecretRepository";
import {Importance, Secret} from "../../../entity/Secret";

export class CreateSecretUseCase implements UseCaseBase<CreateSecretRequestDto,CreateSecretResponseDto>{
    private secretRepository : ISecretRepository;
    
    constructor(secretRepository : ISecretRepository) {
        this.secretRepository = secretRepository;
    }
    async execute(req: CreateSecretRequestDto): Promise<CreateSecretResponseDto> {
        try {
            const secret = new Secret(req.title,req.description,Importance.HIGH, req.secrets);
            const result = await this.secretRepository.createItem(secret);
            return Promise.resolve(new CreateSecretResponseDto(secret,false));
        }
        catch (e) {
            return Promise.resolve(new CreateSecretResponseDto(undefined,true));
        }
    }
}

