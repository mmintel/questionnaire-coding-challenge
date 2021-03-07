import React from 'react';
import { Redirect } from 'react-router';
import { useApp } from '../context/AppContext';

const QuestionPage = () => {
  const { getQuestionUseCase } = useApp();
  const question = getQuestionUseCase.execute();

  return <Redirect to={`/question/${question.id}`} />;
};

export default QuestionPage;
