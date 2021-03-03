import { Choice } from "./Choice";
import { Question } from "./Question";

export class MultipleChoiceQuestion extends Question {
    private choices: Choice[] = [];
    public type = 'multipleChoice';

    getChoices() {
        return this.choices;
    }

    addChoice(choice: Choice) {
        this.choices.push(choice);
    }

    answer(value: string) {
        this.value = value;
    }
}