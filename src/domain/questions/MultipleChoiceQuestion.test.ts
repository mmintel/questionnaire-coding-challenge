import { MultipleChoiceQuestion } from './MultipleChoiceQuestion';

describe('MultipleChoiceQuestion', () => {
    it('should initialize without crashing', () => {
        expect(() => new MultipleChoiceQuestion("foo", "bar")).not.toThrow();
    });

    describe('properties', () => {
        it('should be able to set a type', () => {
            const question = new MultipleChoiceQuestion("foo", "bar");
            question.type = 'foo';
            expect(question.type).toBe('foo');
        });
    });

    describe('setNext', () => {
        it('should be able to set the next question', () => {
            const question = new MultipleChoiceQuestion("foo", "bar");
            const anotherQuestion = new MultipleChoiceQuestion("bar", "baz");
            question.setNext(anotherQuestion);
            expect(question.getNext()?.id).toBe("bar");
        });

        it('should be able to set the next question with a condition', () => {
            const question = new MultipleChoiceQuestion("foo", "bar");
            const anotherQuestion = new MultipleChoiceQuestion("bar", "baz");
            const yetAnotherQuestion = new MultipleChoiceQuestion("barbar", "baz");

            question.setNext(value => value === "foo" ? anotherQuestion : yetAnotherQuestion);

            expect(question.getNext()?.id).toBe("barbar");
            
            question.answer("foo");
            
            expect(question.getNext()?.id).toBe("bar");
        });
    })

    describe('choices', () => {
        it('should be able add a choice', () => {
            const question = new MultipleChoiceQuestion("foo", "bar");
            const choice = {label: "bar", value: "baz"};
            question.addChoice(choice)
            expect(question.getChoices()).toContain(choice);
        });
    });

    describe('answer', () => {
        it('should be able to answer', () => {
            const question = new MultipleChoiceQuestion("foo", "bar");
            question.answer("foo")
            expect(question.value).toBe("foo");
        });
    });
})