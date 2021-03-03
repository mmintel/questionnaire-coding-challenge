import React from 'react';
import { useHistory, useParams } from 'react-router';
import Questionnaire from '../components/Questionnaire';

interface QuestionnaireParams {
    id?: string;
}

const Home = () => {
    const params = useParams<QuestionnaireParams>();
    const history = useHistory();
    const current = Number(params.id) || 0;

    const handleNextQuestion = () => {
        history.push(`/${current + 1}`)
    }
    
    return (
       <Questionnaire current={current} onNextQuestion={handleNextQuestion} />
    )
}

export default Home;