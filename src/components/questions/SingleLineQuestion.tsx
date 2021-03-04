import React from 'react';
import { QuestionValue } from '../../domain/questions/Question';
import { SingleLineQuestion as ISimpleQuestion } from '../../domain/questions/SingleLineQuestion';

interface SingleLineQuestionProps {
    question: ISimpleQuestion;
    value: QuestionValue;
    onChange(value: string): void;
}

const SingleLineQuestion: React.FC<SingleLineQuestionProps> = ({ question, value, onChange }) => {
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        onChange(e.target.value);
    }

    return (
        <div>
            <h1>{question.title}</h1>
            <input type="text" value={value || ''} placeholder={question.placeholder} onChange={handleChange} />
        </div>
    )
}

export default SingleLineQuestion;