import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
      let body =  { username: username, password: password };
      let header = new HttpHeaders({'Content-type': 'application/json'});

        return this.http.post<string>('http://localhost:8080/auth/login', JSON.stringify(body), {headers: header, withCredentials: true})
            .map(user => {
                if (user) {
                    // store user details and in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return username;
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
