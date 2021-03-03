import { Question, QuestionValue } from "../questions/Question";
import { StorageService } from "./StorageService";

export class QuestionnaireService {
    private questions: Question[] = [];

    constructor(private storage: StorageService) {}

    answerQuestion = (question: Question, answer: QuestionValue) => {
        question.answer(answer);
        this.storage.save(question.id, answer);
    }

    addQuestion = (question: Question) => {
        this.questions.push(question);
    }

    getQuestion = (index: number): Question => {
        const question = this.questions[index];
        const answer = this.storage.load(question.id);
        console.log('Received answer from storage', answer);
        
        if (answer) {
            try {
                question.answer(answer)
            } catch {
                console.warn('Something wrong with data loaded from localStorage, ignoring answer...');
            }
        }

        return question;
    }

    isLastQuestion = (index: number) => {
        return index === this.questions.length - 1;
    }
}