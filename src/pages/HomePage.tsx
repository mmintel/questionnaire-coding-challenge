import React from 'react';
import { useHistory } from 'react-router';
import Button from '../components/elements/Button';
import ScreenCenter from '../components/elements/ScreenCenter';

const HomePage = () => {
  const history = useHistory();

  const handleStart = () => {
    history.push(`/question`);
  };

  return (
    <ScreenCenter>
      <Button onClick={handleStart}>Start Questionnaire</Button>
    </ScreenCenter>
  );
};

export default HomePage;
