import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Fileversion} from '../_models/Fileversion';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Version} from '../_models/Version';

@Injectable()
export class OperationService {
  constructor(private http: HttpClient) { }

  createUrl = 'http://localhost:8080/file/create';
  searchUrl = 'http://localhost:8080/file/search';

  createFile(fileversion: Fileversion): Observable<number> {

    const cpHeaders = new HttpHeaders( {'Content-Type': 'application/json'} );

    return this.http.post<any>(this.createUrl, JSON.stringify(fileversion), {headers: cpHeaders, withCredentials: false})
      .map(version => {
        if (version) {
          // store user details and in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentVersion', JSON.stringify(version));
        }

        return version;
      });
  }

  searchFile(url: string): Observable<number> {
    const cpHeaders = new HttpHeaders( {'Content-Type': 'application/json'} );

    return this.http.post<any>(this.searchUrl, url, {headers: cpHeaders, withCredentials: false})
      .map(version => {
        if (version) {
          console.log(version);
          localStorage.setItem('currentVersion', JSON.stringify(version));
        }

        return version;
      });
  }


  private handleError(error: Response | any) {
    console.error( error.message || error );
    return Observable.throw( error.status );
  }

}
