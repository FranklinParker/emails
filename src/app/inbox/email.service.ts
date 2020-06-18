import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {EmailSummary} from './interface/emailSummary';
import {Observable} from 'rxjs';
import {Email} from './interface/email';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  getEmails(): Observable<EmailSummary[]>{
    return this.http.get<EmailSummary[]>( environment.emailUrl )
      .pipe(
        tap((resp)=>{
          console.log('resp', resp);
        })
      );
  }
  getEmail(id: string){
     return this.http.get<Email>(`${environment.emailUrl}/${id}`);
  }
}
