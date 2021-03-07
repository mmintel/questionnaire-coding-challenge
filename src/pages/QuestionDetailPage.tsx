import React from 'react';
import { useHistory, useParams } from 'react-router';
import Questionnaire from '../components/Questionnaire';
import { Question } from '../domain/questions/Question';

interface QuestionDetailPageParams {
  id?: string;
}

const QuestionDetailPage = () => {
  const params = useParams<QuestionDetailPageParams>();
  const history = useHistory();
  const current = params.id;

  const navigateToQuestion = (question: Question) => {
    history.push(`/question/${question.id}`);
  };

  const navigateToRecommendation = async () => {
    history.push('/recommendation');
  };

  return (
    <Questionnaire
      current={current}
      onNextQuestion={navigateToQuestion}
      onFinalize={navigateToRecommendation}
    />
  );
};

export default QuestionDetailPage;
