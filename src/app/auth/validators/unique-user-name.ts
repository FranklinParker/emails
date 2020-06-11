import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {
  AbstractControl,
  AsyncValidator,
  FormControl,
  ValidationErrors
}
  from '@angular/forms';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})

export class UniqueUserName implements AsyncValidator {
  constructor(private httpClient: HttpClient) {
  }

  validate = (formControl: FormControl): Observable<ValidationErrors | null> | null => {
    const {value} = formControl;
    console.log(this.httpClient);
    return this.httpClient.post<any>('https://api.angular-email.com/auth/username',
      {username: value});
  }
}
