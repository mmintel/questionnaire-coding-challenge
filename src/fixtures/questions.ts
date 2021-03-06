import { MultipleChoiceQuestion } from "../domain/questions/MultipleChoiceQuestion";
import { SingleLineQuestion } from "../domain/questions/SingleLineQuestion";

const firstName = new SingleLineQuestion("firstName", "What's your first name?");
firstName.mandatory = true;
firstName.placeholder = 'Jane';

const address = new SingleLineQuestion("address", "What's your address?");
address.placeholder = 'Lohmühlenstraße 65';

const occupation = new MultipleChoiceQuestion("occupation", "What's your occupation?");
occupation.addChoice({ label: 'Employed', value: 'EMPLOYED' });
occupation.addChoice({ label: 'Self-Employed', value: 'SELF_EMPLOYED' });
occupation.addChoice({ label: 'Student', value: 'STUDENT' });

const children = new MultipleChoiceQuestion("children", "Do you have any children?");
children.addChoice({ label: 'Yes', value: 'yes' });
children.addChoice({ label: 'No', value: 'no' });

const numberOfChildren = new SingleLineQuestion("numberOfChildren", "How many children do you have?");
numberOfChildren.fieldType = 'number';
numberOfChildren.placeholder = "2";
numberOfChildren.mandatory = true;

const email = new SingleLineQuestion("email", "What's your email?");
email.mandatory = true;
email.fieldType = 'email';
email.placeholder = "jane.doe@feather-insurance.com";

firstName.setNext(address);
address.setNext(occupation)
occupation.setNext(children);
children.setNext((value) => value === 'yes' ? numberOfChildren : email);
numberOfChildren.setNext(email);

const questions = [ firstName, address, occupation, children, numberOfChildren, email ];

export default questions;