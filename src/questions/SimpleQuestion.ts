import { Question } from "./Question";

export class SimpleQuestion extends Question {
    public type = 'simple';
    public placeholder = 'Type something...';

    answer(value: string) {
        if (!value?.length) throw new Error('This field is mandatory.');
        this.value = value;
    }
}