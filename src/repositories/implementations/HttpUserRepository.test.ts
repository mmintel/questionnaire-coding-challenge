import { User } from "../../domain/users/User"
import { HttpService } from "../../services/HttpService"
import { HttpUserRepository } from "./HttpUserRepository"

const mockHttpService: jest.Mocked<HttpService> = {
    get: jest.fn(),
    post: jest.fn(),
}

const mockUser: User = {
    firstName: 'foo',
    address: 'foo',
    email: 'foo',
    numberOfChildren: 2,
    occupation: 'EMPLOYED'
}

describe("HttpUserRepository", () => {
    it("initializes without crashing", () => {
        expect(() => new HttpUserRepository(mockHttpService)).not.toThrow();
    })

    describe('authenticate', () => {
        it("sends a POST to /user", async () => {
            expect(mockHttpService.post).toHaveBeenCalledTimes(0);
            const repo = new HttpUserRepository(mockHttpService);
            await repo.authenticate(mockUser);
            expect(mockHttpService.post).toHaveBeenCalledTimes(1);
            expect(mockHttpService.post).toHaveBeenCalledWith('/user', mockUser);
        })
    })
})