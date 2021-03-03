import React from 'react';
import { MultipleChoiceQuestion as IMultipleChoiceQuestion } from '../../questions/MultipleChoiceQuestion';

interface MultipleChoiceProps {
    question: IMultipleChoiceQuestion
}

const MultipleChoiceQuestion: React.FC<MultipleChoiceProps> = ({ question }) => {
    return (
        <div>
            <h1>{question.title}</h1>
            {question.getChoices().map(item => (
                <div key={item.value}>
                    <input id={item.value} type="radio" />
                    <label htmlFor={item.value}>{item.label}</label>
                </div>
            ))}
        </div>
    )
}

export default MultipleChoiceQuestion;