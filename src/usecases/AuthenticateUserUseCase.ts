import { User } from "../domain/users/User";
import { UserRepository } from "../repositories/UserRepository";
import { StorageService } from "../services/StorageService";

export class AuthenticateUserUseCase {
    constructor(private repository: UserRepository, private storage: StorageService) {}
    
    async execute(data: User): Promise<void> {
        const { jwt } = await this.repository.authenticate(data);
        this.storage.save('token', jwt);
    }
}