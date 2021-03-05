import React from 'react';
import { useHistory, useParams } from 'react-router';
import Questionnaire from '../components/Questionnaire';
import { useApp } from '../context/AppContext';
import { Question } from '../domain/questions/Question';

interface QuestionDetailPageParams {
    id?: string;
}

const QuestionDetailPage = () => {
    const { getStoredAnswersUseCase, authenticateUserUseCase } = useApp();
    const params = useParams<QuestionDetailPageParams>();
    const history = useHistory();
    const current = params.id;

    const navigateToQuestion = (question: Question) => {
        history.push(`/question/${question.id}`)
    }

    const handleFinalization = async () => {
        try {
            const data = await getStoredAnswersUseCase.execute();
            await authenticateUserUseCase.execute(data);
            history.push('/recommendation');
        } catch(e) {
            console.log('UPS');
            console.log(e);
        }
    }
    
    return (
       <Questionnaire
            current={current}
            onNextQuestion={navigateToQuestion}
            onFinalize={handleFinalization}
        />
    )
}

export default QuestionDetailPage;