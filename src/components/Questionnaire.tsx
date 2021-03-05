import React, { useEffect, useState } from 'react';
import { useApp } from '../context/AppContext';
import { Question, QuestionValue } from '../domain/questions/Question';
import { registry } from './questions/registry';

interface QuestionnaireProps {
    current?: string;
    onNextQuestion(question: Question | null): void;
    onFinalize(): void;
}

const Questionnaire: React.FC<QuestionnaireProps> = ({ current, onNextQuestion, onFinalize }) => {
    const { getQuestionUseCase, answerQuestionUseCase } = useApp();
    const question = getQuestionUseCase.execute(current);
    const [answer, setAnswer] = useState<QuestionValue>(null);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
        // load current answer
        setAnswer(question?.value || null);

        // reset errors
        setError(null);
    }, [question]);

    if (!question) {
        return (<div>Could not find any question.</div>);
    }

    const handleNext = () => {
        try {
            answerQuestionUseCase.execute(question, answer);
            onNextQuestion(question.getNext());
        } catch(e) {
            setError(e.message);
        }
    }

    const handleChange = (value: QuestionValue) => {      
        setAnswer(value)
    }

    const handleGetRecommendation = () => {
        onFinalize();
    }

    const Component = registry[question.type];

    if (!Component) {
        return <div>There is no corresponding component for that type of question. Did you forget to register it?</div>
    }
    
    return (
        <div>
            <Component question={question} value={answer} onChange={handleChange} />

            {error && (
                <div>{error}</div>
            )}

            {question.getNext() && (
                <button onClick={handleNext} disabled={!answer}>Next</button>
            )}

            {!question.getNext() && (
                <button onClick={handleGetRecommendation} disabled={!answer}>Get recommendation</button>
            )}
        </div>
    )
}

Questionnaire.defaultProps = {
    onNextQuestion: () => {},
    onFinalize: () => {}
}

export default Questionnaire;