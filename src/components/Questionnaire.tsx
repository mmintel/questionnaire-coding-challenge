import React, { useEffect, useState } from 'react';
import { useQuestionnaire } from '../context/QuestionnaireContext';
import { QuestionValue } from '../questions/Question';
import MultipleChoiceQuestion from './questions/MultipleChoiceQuestion';
import SimpleQuestion from './questions/SimpleQuestion';

interface QuestionnaireProps {
    current: number;
    onNextQuestion(): void;
}

interface ComponentsRegistry {
    [key: string]: React.ElementType;
}

const Questionnaire: React.FC<QuestionnaireProps> = ({ current, onNextQuestion }) => {
    const { getQuestion, isLastQuestion, answerQuestion } = useQuestionnaire();
    const question = getQuestion(current);
    const [answer, setAnswer] = useState<QuestionValue>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // clean up on new question
        setAnswer(null);
        setError(null);
    }, [current])

    const handleNext = () => {
        try {
            answerQuestion(question, answer);
            onNextQuestion();
        } catch(e) {
            setError(e.message);
        }
    }

    const handleChange = (value: QuestionValue) => {      
        setAnswer(value)
    }

    const handleGetRecommendation = () => {
        console.log('GETTING RECOMMENDATION');
    }

    const components: ComponentsRegistry = {
        multipleChoice: MultipleChoiceQuestion,
        simple: SimpleQuestion,
    }
    const Component = components[question.type];

    if (!Component) {
        return <div>There is no corresponding component for that type of question. Did you forget to register it?</div>
    }
    
    return (
        <div>
            <Component question={question} onChange={handleChange} />

            {error && (
                <div>{error}</div>
            )}

            {!isLastQuestion(current) ? (
                <button onClick={handleNext}>Next</button>
            ) : (
                <button onClick={handleGetRecommendation}>Get recommendation</button>
            )}
        </div>
    )
}

Questionnaire.defaultProps = {
    onNextQuestion: () => {}
}

export default Questionnaire;