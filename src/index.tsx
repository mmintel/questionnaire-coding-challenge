import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppContext } from './context/AppContext';
import questions from './fixtures/questions';
import { GetQuestionUseCase } from './usecases/GetQuestionUseCase';
import { AnswerQuestionUseCase } from './usecases/AnswerQuestionUseCase';
import { LocalStorageService } from './services/implementations/LocalStorageService';
import { InMemoryQuestionRepository } from './repositories/implementations/InMemoryQuestionRepository';
import { AuthenticateUserUseCase } from './usecases/AuthenticateUserUseCase';
import { HttpUserRepository } from './repositories/implementations/HttpUserRepository';
import { FetchHttpService } from './services/implementations/FetchHttpService';
import { GetAllRecommendationsUseCase } from './usecases/GetAllRecommendationsUseCase';
import { HttpRecommendationRepository } from './repositories/implementations/HttpRecommendationRepository';
import { GetStoredAnswersUseCase } from './usecases/GetStoredAnswersUseCase';
import { GetUserTokenUseCase } from './usecases/GetUserTokenUseCase';

const questionStorageService = new LocalStorageService('myapp:answers');
const userStorageService = new LocalStorageService('myapp:user');
const httpService = new FetchHttpService("https://challenge-dot-popsure-204813.appspot.com");

const questionRepository = new InMemoryQuestionRepository();
const userRepository = new HttpUserRepository(httpService);
const recommendationRepository = new HttpRecommendationRepository(httpService);

questions.forEach(question => questionRepository.add(question));

ReactDOM.render(
<React.StrictMode>
    <AppContext.Provider value={{
      authenticateUserUseCase: new AuthenticateUserUseCase(userRepository, userStorageService),
      getAllRecommendationsUseCase: new GetAllRecommendationsUseCase(recommendationRepository),
      getQuestionUseCase: new GetQuestionUseCase(questionRepository, questionStorageService),
      answerQuestionUseCase: new AnswerQuestionUseCase(questionRepository, questionStorageService),
      getStoredAnswersUseCase: new GetStoredAnswersUseCase(questionStorageService),
      getUserTokenUseCase: new GetUserTokenUseCase(userStorageService),
    }}>
      <App />
    </AppContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
