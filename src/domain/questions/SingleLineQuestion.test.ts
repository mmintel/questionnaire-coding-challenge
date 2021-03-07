import { SingleLineQuestion } from './SingleLineQuestion';

describe('SingleLineQuestion', () => {
    it('should initialize without crashing', () => {
        expect(() => new SingleLineQuestion("foo", "bar")).not.toThrow();
    });

    describe('properties', () => {
        it('should be able to set a type', () => {
            const question = new SingleLineQuestion("foo", "bar");
            question.type = 'foo';
            expect(question.type).toBe('foo');
        });
    
        it('should be able to make it mandatory', () => {
            const question = new SingleLineQuestion("foo", "bar");
            question.mandatory = true;
            expect(question.mandatory).toBe(true);
        });
    
        it('should be able to add a placeholder', () => {
            const question = new SingleLineQuestion("foo", "bar");
            question.placeholder = 'foo';
            expect(question.placeholder).toBe('foo');
        });
    
        it('should be able to set a fieldType', () => {
            const question = new SingleLineQuestion("foo", "bar");
            question.fieldType = 'text';
            expect(question.fieldType).toBe('text');
        });
    });

    describe('answer', () => {
        it('should be able to answer', () => {
            const question = new SingleLineQuestion("foo", "bar");
            question.answer("foo")
            expect(question.value).toBe("foo");
        });
        
        it("should throw an error when empty, but mandatory", () => {
            const question = new SingleLineQuestion("foo", "bar");
            question.mandatory = true;
            
            expect(() => question.answer("")).toThrow();
        })
    })
})