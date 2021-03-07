import { LocalStorageService, LocalStorage } from './LocalStorageService';

const mockLocalStorage: jest.Mocked<LocalStorage> = {
    setItem: jest.fn(),
    getItem: jest.fn(),
}

const mockKey = "foo";

describe("LocalStorageService", () => {
    it('initializes without crashing', () => {
        expect(() => new LocalStorageService(mockKey, mockLocalStorage)).not.toThrow();
    });

    const localStorageService = new LocalStorageService(mockKey, mockLocalStorage);
    
    describe("save", () => {
        it('saves as a property of an object under specified key', () => {
            localStorageService.save("baz", "bar")
            expect(mockLocalStorage.setItem).toHaveBeenCalledWith(mockKey, JSON.stringify({ baz: "bar" }));
        });
        
        it('merges existing data on save', () => {
            mockLocalStorage.getItem.mockReturnValueOnce(JSON.stringify({ foofoo: "bazbaz"}));
            localStorageService.save("baz", "bar")
            expect(mockLocalStorage.setItem).toHaveBeenCalledWith(mockKey, JSON.stringify({ foofoo: "bazbaz", baz: "bar" }));
        })
    });

    describe('load', () => {
        it('loads a property', () => {
            mockLocalStorage.getItem.mockReturnValueOnce(JSON.stringify({ foofoo: "bazbaz"}));
            expect(localStorageService.load("foofoo")).toBe("bazbaz");
        });
    })

    describe('loadAll', () => {
        it('loads all properties', () => {
            const mockData = { foofoo: "bazbaz", foo: "bar" };
            mockLocalStorage.getItem.mockReturnValueOnce(JSON.stringify(mockData));
            expect(localStorageService.loadAll()).toEqual(mockData);
        });
    })
})