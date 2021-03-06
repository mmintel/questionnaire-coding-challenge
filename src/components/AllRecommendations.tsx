import React, { useEffect, useState } from 'react';
import { useApp } from '../context/AppContext';
import { Recommendation as IRecommendation } from '../domain/recommendations/Recommendation';
import Recommendation from './Recommendation';

const AllRecommendations = () => {
    const { getUserTokenUseCase, getAllRecommendationsUseCase } = useApp();
    const [error, setError] = useState<string | null>(null);
    const [recommendations, setRecommendations] = useState<IRecommendation[] | null>(null);
    const token = getUserTokenUseCase.execute();

    useEffect(() => {
        if (!token) {
            setError('Not authenticated');
            return;
        }

        const fetchData = async () => {
            const recommendations = await getAllRecommendationsUseCase.execute(token);            
            setRecommendations(recommendations);
        };

        fetchData();
    }, [getAllRecommendationsUseCase, token])

    return (
        <div>
            <h1>We got your recommendation</h1>
            <h2>Based on your answers, this is what makes sense for you and what you should pay.</h2>

            {error && <div>{error}</div>}

            {recommendations?.map(recommendation => (
                <Recommendation recommendation={recommendation} key={recommendation.type} />
            ))}
        </div>
    )
}

export default AllRecommendations;