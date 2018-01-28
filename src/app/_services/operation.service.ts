import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Fileversion} from '../_models/Fileversion';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class OperationService {
  constructor(private http: HttpClient) {
  }

  fileUrl = 'http://localhost:8080/file/create';

  generateUrl(fileversion: Fileversion): Observable<number> {

    const cpHeaders = new HttpHeaders( {'Content-Type': 'application/json'} );

    return this.http.post<any>(this.fileUrl, JSON.stringify(fileversion), {headers: cpHeaders, withCredentials: false})
      .map( sucess => sucess.status )
      .catch( this.handleError );
  }


  private handleError(error: Response | any) {
    console.error( error.message || error );
    return Observable.throw( error.status );
  }

}
