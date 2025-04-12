import { HttpClient } from '../client';
import { UsersClient } from '../modules/users';
import { SigmaClientOpts } from './type';

class SigmaClient {
    private http: HttpClient;

    users: UsersClient;

    constructor({ baseURL }: SigmaClientOpts) {
        this.http = new HttpClient({ baseURL });

        this.users = new UsersClient(this.http);
    }
}

export { SigmaClient };
