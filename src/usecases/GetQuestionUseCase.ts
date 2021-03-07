import { Question } from '../domain/questions/Question';
import { QuestionRepository } from '../repositories/QuestionRepository';
import { StorageService } from '../services/StorageService';

export class GetQuestionUseCase {
  constructor(
    private repository: QuestionRepository,
    private storage: StorageService,
  ) {}

  execute(id?: string): Question {
    const question: Question | undefined = id
      ? this.repository.findByID(id)
      : this.repository.first();

    if (!question) {
      throw new Error('Could not find question');
    }

    const answer = this.storage.load(question.id);

    // try to answer question with data from storage
    if (answer) {
      try {
        question.answer(answer);
      } catch {
        console.warn(
          'Something wrong with data loaded from localStorage, ignoring answer...',
        );
      }
    }

    return question;
  }
}
