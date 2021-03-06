import React, { useEffect, useState } from 'react';
import { useApp } from '../context/AppContext';
import { Recommendation as IRecommendation } from '../domain/recommendations/Recommendation';
import Container from './elements/Container';
import ScreenCenter from './elements/ScreenCenter';
import Typography from './elements/Typography';
import Recommendation from './Recommendation';

const AllRecommendations: React.FC = () => {
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
        <ScreenCenter>
            <Container>
                <Typography className="mb-2" tag="h1" size={1}>We got your recommendation</Typography>
                <Typography className="mb-4" tag="h2" size={2}>Based on your answers, this is what makes sense for you and what you should pay.</Typography>

                {error && <div>{error}</div>}

                {recommendations?.map(recommendation => (
                    <Recommendation recommendation={recommendation} key={recommendation.type} />
                ))}
            </Container>
        </ScreenCenter>
    )
}

export default AllRecommendations;