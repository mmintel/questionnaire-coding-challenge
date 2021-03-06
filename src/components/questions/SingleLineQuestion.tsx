import React from 'react';
import { QuestionValue } from '../../domain/questions/Question';
import { SingleLineQuestion as ISimpleQuestion } from '../../domain/questions/SingleLineQuestion';
import Input from '../elements/Input';
import Typography from '../elements/Typography';
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
            <Typography tag="h1" size={1}>{question.title}</Typography>
            <Input type={question.fieldType} className="my-3" value={value || ''} placeholder={question.placeholder} onChange={handleChange} />
        </div>
    )
}

export default SingleLineQuestion;