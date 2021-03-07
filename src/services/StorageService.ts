export interface Json {
  [key: string]: any;
}

export interface StorageService {
  save(key: string, value: any): void;
  load(key: string): string | null;
  loadAll(): Json;
}
