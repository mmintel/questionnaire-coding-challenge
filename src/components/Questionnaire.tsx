import React, { useEffect, useState } from 'react';
import { useApp } from '../context/AppContext';
import { Question, QuestionValue } from '../domain/questions/Question';
import Alert from './elements/Alert';
import Button from './elements/Button';
import Container from './elements/Container';
import ScreenCenter from './elements/ScreenCenter';
import { registry } from './questions/registry';

interface QuestionnaireProps {
    current?: string;
    onNextQuestion(question: Question | null): void;
    onFinalize(): void;
}

const Questionnaire: React.FC<QuestionnaireProps> = ({ current, onNextQuestion, onFinalize }) => {
    const { getQuestionUseCase, answerQuestionUseCase, getStoredAnswersUseCase, authenticateUserUseCase } = useApp();
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

    const answerQuestion = () => {
        try {
            answerQuestionUseCase.execute(question, answer);
        } catch(e) {
            setError(e.message);
        }
    }

    const handleNext = () => {
        answerQuestion();
        onNextQuestion(question.getNext());
    }

    const handleChange = (value: QuestionValue) => {      
        setAnswer(value)
    }

    const handleGetRecommendation = async () => {
        answerQuestion();

        try {
            const data = getStoredAnswersUseCase.execute();
            await authenticateUserUseCase.execute({
                address: data.address,
                email: data.email,
                firstName: data.firstName,
                numberOfChildren: data.children === 'yes' && data.numberOfChildren ? Number(data.numberOfChildren) : 0,
                occupation: data.occupation,
            });
            onFinalize();
        } catch(e) {
            setError(e.message);
        }
    }

    const handleSubmit = (e: React.FormEvent) => {        
        e.preventDefault();

        if (!answer) return;
        if (question.getNext()) {
            handleNext();
        } else {
            handleGetRecommendation();
        }
    }

    const Component = registry[question.type];

    if (!Component) {
        return <div>There is no corresponding component for that type of question. Did you forget to register it?</div>
    }
    
    return (
        <ScreenCenter>
            <Container>
                <form onSubmit={handleSubmit}>
                    <Component question={question} value={answer} onChange={handleChange} />

                    {error && (
                        <Alert>{error}</Alert>
                    )}

                    <div className="mt-4">
                        <Button type="submit" disabled={!answer}>{question.getNext() ? "Next" : "Submit"}</Button>
                    </div>
                </form>
            </Container>
        </ScreenCenter>
    )
}

Questionnaire.defaultProps = {
    onNextQuestion: () => {},
    onFinalize: () => {}
}

export default Questionnaire;