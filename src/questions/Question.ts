export type QuestionValue = string | boolean | number | null;

export abstract class Question {
    public value: QuestionValue = null;
    public abstract type: string;

    constructor(public id: string, public title: string) {}
    
    abstract answer(value: QuestionValue): void;
}