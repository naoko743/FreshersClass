import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models/index';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    create(user: User) {
       return this.http.post<any>('http://localhost:8080/user/create', user);

    }
    getAll() {
        return this.http.get<User[]>('http://localhost:8080/user/findAll');
    }

    getById(id: number) {
        return this.http.get('/api/users/' + id);
    }


    update(user: User) {
        return this.http.put('/api/users/' + user.id, user);
    }

    delete(id: number) {
        return this.http.delete('/api/users/' + id);
    }
}
