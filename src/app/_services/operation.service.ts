import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class OperationService {
  constructor(private http: HttpClient) { }

  generateUrl() {
   // fileversion.date = '16.07.1988';
    let asdf :  'adfdsf';
    return this.http.post<any>('http://localhost:8080/file/create', asdf);
  }

}
