import { Question } from "../domain/questions/Question";

export interface QuestionRepository {
    findByID(id: string): Question | undefined;
    add(question: Question): void;
    first(): Question;
}