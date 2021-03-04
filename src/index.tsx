import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QuestionsContext } from './context/QuestionsContext';
import questions from './fixtures/questions';
import { LocalStorageService } from './services/StorageService';
import { InMemoryQuestionRepository } from './repositories/QuestionRepository';
import { GetQuestionUseCase } from './usecases/GetQuestionUseCase';
import { AnswerQuestionUseCase } from './usecases/AnswerQuestionUseCase';

const localStorageService = new LocalStorageService('myapp', localStorage);
const inMemoryRepository = new InMemoryQuestionRepository();

questions.forEach(question => inMemoryRepository.add(question));

ReactDOM.render(
<React.StrictMode>
    <QuestionsContext.Provider value={{
      getQuestionUseCase: new GetQuestionUseCase(inMemoryRepository, localStorageService),
      answerQuestionUseCase: new AnswerQuestionUseCase(inMemoryRepository, localStorageService),
    }}>
      <App />
    </QuestionsContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
