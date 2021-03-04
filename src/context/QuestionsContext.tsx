import React, { useContext } from 'react';
import { AnswerQuestionUseCase } from '../usecases/AnswerQuestionUseCase';
import { GetQuestionUseCase } from '../usecases/GetQuestionUseCase';

interface QuestionsContextProps {
    getQuestionUseCase: GetQuestionUseCase;
    answerQuestionUseCase: AnswerQuestionUseCase;
}

export const QuestionsContext = React.createContext<QuestionsContextProps>({} as QuestionsContextProps);

export const useQuestions = () => {
    return useContext(QuestionsContext);
}