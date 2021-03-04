import { MultipleChoiceQuestion } from "../domain/questions/MultipleChoiceQuestion";
import { SingleLineQuestion } from "../domain/questions/SingleLineQuestion";

const firstName = new SingleLineQuestion("firstName", "What's your first name?");
firstName.mandatory = true;
firstName.placeholder = 'John';

const lastName = new SingleLineQuestion("lastName", "What's your last name?");
lastName.placeholder = 'Doe';

const occupation = new MultipleChoiceQuestion("occupation", "What's your occupation?");
occupation.addChoice({ label: 'Employed', value: 'employed' });
occupation.addChoice({ label: 'Self-Employed', value: 'self_employed' });
occupation.addChoice({ label: 'Student', value: 'student' });

const children = new MultipleChoiceQuestion("children", "Do you have any children?");
children.addChoice({ label: 'Yes', value: 'yes' });
children.addChoice({ label: 'No', value: 'no' });

const childrenAmount = new SingleLineQuestion("childrenAmount", "How many children do you have?");
childrenAmount.fieldType = 'number';
childrenAmount.mandatory = true;

const email = new SingleLineQuestion("email", "What's your email?");
email.mandatory = true;
email.fieldType = 'email';
email.placeholder = "john@doe.com";

firstName.setNext(lastName);
lastName.setNext(occupation);
occupation.setNext(children);
children.setNext((value) => value === 'yes' ? childrenAmount : email);
childrenAmount.setNext(email);

const questions = [ firstName, lastName, occupation, children, childrenAmount, email ];

export default questions;