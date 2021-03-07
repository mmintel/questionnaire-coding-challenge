import { StorageService, Json } from "../StorageService";

export interface LocalStorage {
    setItem(key: string, value: string): void;
    getItem(key: string): string | null;
}

export class LocalStorageService implements StorageService {
    constructor(private key: string, private localStorage: LocalStorage) {}
    
    save(key: string, value: any) {
        const data = this.loadAll();
        data[key] = value;        
        this.localStorage.setItem(this.key, JSON.stringify(data));
    }

    load(key: string) {
        const data = this.loadAll();
        return data[key];
    }

    loadAll() {
        return this.getFromLocalStorage();
    }
    
    private getFromLocalStorage(): Json {
        const raw = this.localStorage.getItem(this.key);
        return raw ? JSON.parse(raw) : {};
    }
}