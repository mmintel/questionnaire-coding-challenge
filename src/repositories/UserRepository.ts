import { User } from '../domain/users/User';

export interface JWT {
  jwt: string;
}

export interface UserRepository {
  authenticate(user: User): Promise<JWT>;
}
