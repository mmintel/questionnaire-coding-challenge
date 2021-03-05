import React, { useEffect, useState } from 'react';
import { useApp } from '../context/AppContext';
import { Recommendation } from '../domain/recommendations/Recommendation';

const RecommendationPage = () => {
    const { getUserTokenUseCase, getAllRecommendationsUseCase } = useApp();
    const [error, setError] = useState<string | null>(null);
    const [recommendations, setRecommendations] = useState<Recommendation[] | null>(null);
    const token = getUserTokenUseCase.execute();

    useEffect(() => {
        if (!token) {
            setError('Not authenticated');
            return;
        }

        const fetchData = async () => {
            const recommendations = await getAllRecommendationsUseCase.execute(token)
            setRecommendations(recommendations);
        };

        fetchData();
    }, [])
    

    return (
        <div>
            Here is your recommendation!

            {error && <div>{error}</div>}

            {recommendations?.map(recommendation => (
                <div>{recommendation.type}</div>
            ))}
        </div>
    )
}

export default RecommendationPage;