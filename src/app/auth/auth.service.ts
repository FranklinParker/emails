import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SignupResponse} from './interface/signupResponse';
import {SignupRequest} from './interface/signupRequest';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  userNameAvailable(username: string) {
    return this.http.post<{ available: boolean }>('https://api.angular-email.com/auth/username',
      {username})
  }

  signup(signup: SignupRequest): Observable<SignupResponse> {
    return this.http.post<SignupResponse>('https://api.angular-email.com/auth/signup',
      signup);
  }
}
