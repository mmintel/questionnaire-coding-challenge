import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from './pages/HomePage';
import QuestionDetailPage from './pages/QuestionDetailPage';
import QuestionPage from './pages/QuestionPage';
import RecommendationPage from './pages/RecommendationPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/question">
          <QuestionPage />
        </Route>
        <Route path="/question/:id">
          <QuestionDetailPage />
        </Route>
        <Route path="/recommendation">
          <RecommendationPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
