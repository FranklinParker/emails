import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {
  AsyncValidator,
  FormControl,
  ValidationErrors
}
  from '@angular/forms';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class UniqueUserName implements AsyncValidator {
  constructor(private httpClient: HttpClient) {
  }

  validate = (formControl: FormControl): Observable<ValidationErrors | null> | null => {
    const {value} = formControl;
    console.log(this.httpClient);
    return this.httpClient.post<any>('https://api.angular-email.com/auth/username',
      {username: value})
      .pipe(
        map(value => {
          if (value.available) {
            return null;
          }
        }),
        catchError((err) =>{
          console.log(err);
          if(err.error.username){
            return of({ nonUniqueUsername: true});
          } else{
            return of({ noConnection: true});
          }
        })
      );
  }
}
