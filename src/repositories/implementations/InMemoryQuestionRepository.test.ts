import { SingleLineQuestion } from "../../domain/questions/SingleLineQuestion";
import { InMemoryQuestionRepository } from "./InMemoryQuestionRepository"

const mockQuestions = [new SingleLineQuestion("foo", "bar"), new SingleLineQuestion("baz", "barfoo"), new SingleLineQuestion("foofoo", "barbar")]

describe('InMemoryQuestionRepository', () => {
    it('initializes without crashing', () => {
        expect(() => new InMemoryQuestionRepository()).not.toThrow();
    });

    describe('add', () => {
        it('should add a question', () => {
            const repo = new InMemoryQuestionRepository();
            repo.add(mockQuestions[0]);
            expect(repo.findByID("foo")).toEqual(mockQuestions[0])
        });
    });
    
    describe('retrieving', () => {
        const repo = new InMemoryQuestionRepository();

        beforeEach(() => {
            mockQuestions.forEach(q => repo.add(q));
        });

        it('should retrieve the first question', () => {
            expect(repo.first()).toEqual(mockQuestions[0]);
        });

        it('should retrieve a question by id', () => {
            expect(repo.findByID(mockQuestions[2].id)).toEqual(mockQuestions[2]);
        });
    })
})