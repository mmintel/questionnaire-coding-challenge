import { MultipleChoiceQuestion } from "./questions/MultipleChoiceQuestion";
import { SimpleQuestion } from "./questions/SimpleQuestion";

const firstName = new SimpleQuestion("firstName", "What's your first name?");
firstName.placeholder = 'John Doe';

const occupation = new MultipleChoiceQuestion("occupation", "What's your occupation?");
occupation.addChoice({ label: 'Employed', value: 'employed' });
occupation.addChoice({ label: 'Self-Employed', value: 'self_employed' });
occupation.addChoice({ label: 'Student', value: 'student' });

const questions = [ firstName, occupation ];

export default questions;