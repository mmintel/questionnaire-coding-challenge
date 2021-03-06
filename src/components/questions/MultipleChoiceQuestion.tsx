import React from 'react';
import { MultipleChoiceQuestion as IMultipleChoiceQuestion } from '../../domain/questions/MultipleChoiceQuestion';
import { QuestionValue } from '../../domain/questions/Question';
import Typography from '../elements/Typography';

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
            <Typography tag="h1" className="mb-4" size={1}>{question.title}</Typography>
            {question.getChoices().map(item => (
                <div className="mb-1" key={item.value}>
                    <input name={question.id} id={item.value} value={item.value} checked={value === item.value} onChange={handleChange} type="radio" />
                    <label className="ml-2" htmlFor={item.value}>{item.label}</label>
                </div>
            ))}
        </div>
    )
}

export default MultipleChoiceQuestion;