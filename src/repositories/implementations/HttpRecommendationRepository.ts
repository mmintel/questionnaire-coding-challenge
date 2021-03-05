import { Recommendation } from "../../domain/recommendations/Recommendation";
import { HttpService } from "../../services/HttpService";
import { RecommendationRepository } from '../RecommendationRepository';

export class HttpRecommendationRepository implements RecommendationRepository {
    constructor(private httpService: HttpService) {}

    async getAll(token: string) {
        return this.httpService.get<Recommendation[]>('/recommendation', {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
    }
}