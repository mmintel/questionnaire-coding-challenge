import { StorageService, Json } from "../StorageService";

export class LocalStorageService implements StorageService {
    constructor(private key: string) {}
    
    save(key: string, value: any) {
        const data = this.loadAll();
        data[key] = value;        
        localStorage.setItem(this.key, JSON.stringify(data));
    }

    load(key: string) {
        const data = this.loadAll();
        return data[key];
    }

    loadAll() {
        return this.getFromLocalStorage();
    }
    
    private getFromLocalStorage(): Json {
        const raw = localStorage.getItem(this.key);
        return raw ? JSON.parse(raw) : {};
    }
}