import React from 'react';
import { MultipleChoiceQuestion as IMultipleChoiceQuestion } from '../../domain/questions/MultipleChoiceQuestion';
import { QuestionValue } from '../../domain/questions/Question';

interface MultipleChoiceProps {
    question: IMultipleChoiceQuestion;
    value: QuestionValue;
    onChange(value: string): void;
}

const MultipleChoiceQuestion: React.FC<MultipleChoiceProps> = ({ value, question, onChange }) => {
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        onChange(e.target.value);
    }

    return (
        <div>
            <h1>{question.title}</h1>
            {question.getChoices().map(item => (
                <div key={item.value}>
                    <input name={question.id} id={item.value} value={item.value} checked={value === item.value} onChange={handleChange} type="radio" />
                    <label htmlFor={item.value}>{item.label}</label>
                </div>
            ))}
        </div>
    )
}

export default MultipleChoiceQuestion;