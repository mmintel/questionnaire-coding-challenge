export interface User {
    firstName: string;
    address: string;
    numberOfChildren: number;
    occupation: 'EMPLOYED' | 'SELF_EMPLOYED' | 'STUDENT';
    email: string;
}