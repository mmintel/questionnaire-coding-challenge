import MultipleChoiceQuestion from "./MultipleChoiceQuestion";
import SingleLineQuestion from "./SingleLineQuestion";

interface ComponentsRegistry {
    [key: string]: React.ElementType;
}

export const registry: ComponentsRegistry = {
    multipleChoice: MultipleChoiceQuestion,
    simple: SingleLineQuestion,
}