export interface StorageService {
    save(key: string, value: any): void;
    load(key: string): string | null;
}

// TODO
// store data under myapp = "{ firstName: 'foo'}"

export class LocalStorageService implements StorageService {
    private key = 'myapp';
    
    save(key: string, value: any) {
        console.log('saving to local storage');
        localStorage.setItem(this.key, value);
    }

    load(key: string) {
        console.log('loading from local storage');
        return localStorage.getItem(this.key);
    }
}