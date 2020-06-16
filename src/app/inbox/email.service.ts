import { Injectable } from '@angular/core';
import {SignedInResponse} from '../auth/interface/signedInResponse';
import {environment} from '../../environments/environment';
import {tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  getEmails(){
    return this.http.get<any>( environment.emailUrl ,)
      .pipe(
        tap((resp)=>{
        })
      );
  }
}
