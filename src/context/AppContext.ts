import React, { useContext } from 'react';
import { AnswerQuestionUseCase } from '../usecases/AnswerQuestionUseCase';
import { AuthenticateUserUseCase } from '../usecases/AuthenticateUserUseCase';
import { GetAllRecommendationsUseCase } from '../usecases/GetAllRecommendationsUseCase';
import { GetQuestionUseCase } from '../usecases/GetQuestionUseCase';
import { GetStoredAnswersUseCase } from '../usecases/GetStoredAnswersUseCase';
import { GetUserTokenUseCase } from '../usecases/GetUserTokenUseCase';

interface AppContextProps {
    getQuestionUseCase: GetQuestionUseCase;
    answerQuestionUseCase: AnswerQuestionUseCase;
    authenticateUserUseCase: AuthenticateUserUseCase;
    getAllRecommendationsUseCase: GetAllRecommendationsUseCase;
    getStoredAnswersUseCase: GetStoredAnswersUseCase;
    getUserTokenUseCase: GetUserTokenUseCase;
}

export const AppContext = React.createContext<AppContextProps>({} as AppContextProps);

export const useApp = () => {
    return useContext(AppContext);
}