import { Question } from "../../domain/questions/Question";
import { QuestionRepository } from "../QuestionRepository";

export class InMemoryQuestionRepository implements QuestionRepository {
    private questions: Question[] = [];

    add(question: Question) {
        this.questions.push(question);
    }

    first() {
        return this.questions[0];
    }

    findByID(id: string) {
        return this.questions.find(q => q.id === id);
    }
}