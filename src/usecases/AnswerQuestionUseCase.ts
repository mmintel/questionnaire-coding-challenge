import { Question, QuestionValue } from '../domain/questions/Question';
import { QuestionRepository } from '../repositories/QuestionRepository';
import { StorageService } from '../services/StorageService';

export class AnswerQuestionUseCase {
  constructor(
    private repository: QuestionRepository,
    private storage: StorageService,
  ) {}

  execute(question: Question, answer: QuestionValue) {
    question.answer(answer);
    this.storage.save(question.id, answer);
  }
}
