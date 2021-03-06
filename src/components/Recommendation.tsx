import React from 'react';
import { Recommendation as IRecommendation } from '../domain/recommendations/Recommendation';

interface RecommendationProps {
    recommendation: IRecommendation;
}

const Recommendation: React.FC<RecommendationProps> = ({ recommendation }) => {
    // TODO string formatting should be placed here
    const labels = {
        HEALTH_INSURANCE: 'Health insurance',
        HOME_CONTENT: 'Home content',
        PRIVATE_LIABILITY: 'Private liability',
        MONTH: 'month',
        YEAR: 'year',
    }
    return (
        <div>
            <div>{labels[recommendation.type]}</div>
            <div>{recommendation.price.amount} {labels[recommendation.price.periodicity]}</div>
        </div>
    )
}

export default Recommendation;