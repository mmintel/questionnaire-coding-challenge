import { User } from "../../domain/users/User";
import { HttpService } from "../../services/HttpService";
import { UserRepository, JWT } from "../UserRepository";

export class HttpUserRepository implements UserRepository {
    constructor(private httpService: HttpService) {}

    authenticate(user: User): Promise<JWT> {
        return this.httpService.post('/user', user);
    }
}