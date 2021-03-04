import { Question } from "./Question";

type FieldType = 'text' | 'number' | 'email';

export class SingleLineQuestion extends Question {
    public type = 'simple';
    public placeholder = 'Type something...';
    public mandatory = false;
    public fieldType: FieldType = 'text';

    answer(value: string) {
        if (this.mandatory && !value?.length) throw new Error('This field is mandatory.');
        this.value = value;
    }
}