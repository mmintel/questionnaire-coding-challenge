import React from 'react';
import { Redirect } from 'react-router';
import { useQuestions } from '../context/QuestionsContext';

const QuestionPage = () => {
    const { getQuestionUseCase } = useQuestions();
    const question = getQuestionUseCase.execute();
    
    return (
       <Redirect to={`/question/${question.id}`} />
    )
}

export default QuestionPage;