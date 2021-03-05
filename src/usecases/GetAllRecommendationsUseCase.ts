import { Recommendation } from "../domain/recommendations/Recommendation";
import { RecommendationRepository } from "../repositories/RecommendationRepository";

export class GetAllRecommendationsUseCase {
    constructor(private repository: RecommendationRepository) {}
    
    async execute(token: string): Promise<Recommendation[]> {
        return this.repository.getAll(token);
    }
}