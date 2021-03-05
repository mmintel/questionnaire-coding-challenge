import { StorageService } from "../services/StorageService";

export class GetUserTokenUseCase {
    constructor(private storage: StorageService) {}
    
    execute(): string | null {
        return this.storage.load('token');
    }
}