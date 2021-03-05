import { StorageService } from '../services/StorageService';

export class GetStoredAnswersUseCase {
    constructor(private storage: StorageService) {}
    
    execute() {
        return this.storage.loadAll();
    }
}