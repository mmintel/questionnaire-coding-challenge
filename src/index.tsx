import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QuestionnaireContext, questionnaireService } from './context/QuestionnaireContext';
import questions from './questions';

questions.forEach(question => questionnaireService.addQuestion(question));

ReactDOM.render(
  <React.StrictMode>
    <QuestionnaireContext.Provider value={questionnaireService}>
      <App />
    </QuestionnaireContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
