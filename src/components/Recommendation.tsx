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
        <div className="border p-4 mb-2 flex justify-between">
            <div>{labels[recommendation.type]}</div>
            <div>€{recommendation.price.amount} per {labels[recommendation.price.periodicity]}</div>
        </div>
    )
}

export default Recommendation;