import React from 'react';
import { SimpleQuestion as ISimpleQuestion } from '../../questions/SimpleQuestion';

interface SimpleQuestionProps {
    question: ISimpleQuestion;
    onChange(value: string): void;
}

const SimpleQuestion: React.FC<SimpleQuestionProps> = ({ question, onChange }) => {
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        onChange(e.target.value);
    }

    return (
        <div>
            <h1>{question.title}</h1>
            <input type="text" placeholder={question.placeholder} onChange={handleChange} />
        </div>
    )
}

export default SimpleQuestion;