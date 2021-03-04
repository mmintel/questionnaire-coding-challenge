export interface StorageService {
    save(key: string, value: any): void;
    load(key: string): string | null;
}

interface RawJSON {
    [key: string]: any;
}

export interface LocalStorage {
    setItem(key: string, value: any): void;
    getItem(key: string): string | null;
}

export class LocalStorageService implements StorageService {
    constructor(private key: string, private localStorage: LocalStorage) {}
    
    save(key: string, value: any) {
        const data = this.getFromLocalStorage();
        data[key] = value;        
        this.localStorage.setItem(this.key, JSON.stringify(data));
    }

    load(key: string) {
        const data = this.getFromLocalStorage();
        return data[key];
    }
    
    private getFromLocalStorage(): RawJSON {
        const raw = this.localStorage.getItem(this.key);
        return raw ? JSON.parse(raw) : {};
    }
}