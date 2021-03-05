import { UserRepository } from "../repositories/UserRepository";
import { StorageService } from "../services/StorageService";

export class AuthenticateUserUseCase {
    constructor(private repository: UserRepository, private storage: StorageService) {}
    
    async execute(data: any): Promise<void> {
        const { jwt } = await this.repository.authenticate(data);
        this.storage.save('token', jwt);
    }
}