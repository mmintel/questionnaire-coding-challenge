import { Recommendation } from '../domain/recommendations/Recommendation';

export interface RecommendationRepository {
  getAll(token: string): Promise<Recommendation[]>;
}
