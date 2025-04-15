import { HttpClient } from '@/client';
import { AuthClient } from '@/modules/auth';
import { UsersClient } from '@/modules/users';
import { SigmaClientOpts } from './type';

class SigmaClient {
    private http: HttpClient;

    users: UsersClient;
    auth: AuthClient;

    constructor(opts: SigmaClientOpts) {
        const { baseURL } = opts;

        this.http = new HttpClient({ baseURL });

        this.users = new UsersClient(this.http);
        this.auth = new AuthClient(this.http);
    }
}

export { SigmaClient };
