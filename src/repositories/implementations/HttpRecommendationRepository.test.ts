import { HttpService } from "../../services/HttpService"
import { HttpRecommendationRepository } from "./HttpRecommendationRepository"

const mockHttpService: jest.Mocked<HttpService> = {
    get: jest.fn(),
    post: jest.fn(),
}

const mockJWT = 'ey12930h109dnsaoi0dnaoisndas';

describe("HttpRecommendationRepository", () => {
    it("initializes without crashing", () => {
        expect(() => new HttpRecommendationRepository(mockHttpService)).not.toThrow();
    })

    describe('getAll', () => {
        it("sends a GET to /recommendation", async () => {
            expect(mockHttpService.get).toHaveBeenCalledTimes(0);
            const repo = new HttpRecommendationRepository(mockHttpService);
            await repo.getAll(mockJWT);
            expect(mockHttpService.get).toHaveBeenCalledTimes(1);
            expect(mockHttpService.get).toHaveBeenCalledWith('/recommendation', {
                headers: {
                    Authorization: `Bearer ${mockJWT}`,
                }
            });
        })
    })
})