export type QuestionValue = string | number | null;

type Validator = (value: QuestionValue) => Question;

export abstract class Question {
    public value: QuestionValue = null;
    public abstract type: string;
    private next: Question | Validator | null = null;

    constructor(public id: string, public title: string) {}
    
    abstract answer(value: QuestionValue): void;

    public getNext(): Question | null {
        if (typeof this.next === "function") {
            return this.next(this.value);
        }

        return this.next;
    }

    public setNext(next: Question | Validator) {
        this.next = next;
    }
}