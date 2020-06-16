import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {environment} from '../../environments/environment';

import {SignupResponse} from './interface/signupResponse';
import {SignupRequest} from './interface/signupRequest';
import {SignedInResponse} from './interface/signedInResponse';
import {SignInCredentials} from './interface/signInCredentials';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private signedin$ = new BehaviorSubject(null);


  constructor(private http: HttpClient) {
  }

  getSignedIn(){
    return this.signedin$.asObservable();
  }

  userNameAvailable(username: string) {
    return this.http.post<{ available: boolean }>(environment.authUrl+ '/username',
      {username})
  }

  signup(signup: SignupRequest): Observable<SignupResponse> {
    return this.http.post<SignupResponse>(environment.authUrl+'/signup',
      signup,)
      .pipe(
        tap(()=> this.signedin$.next(true))
      );
  }

  checkAuth(){
    return this.http.get<SignedInResponse>( environment.authUrl + '/signedin',)
      .pipe(
        tap((resp)=>{
          this.signedin$.next(resp.authenticated);
        })
      );
  }

  signout(){
    return this.http.post<any>( environment.authUrl + '/signout', {})
      .pipe(
        tap((resp)=>{
          console.log('sign out');
          this.signedin$.next(false);
        })
      );
  }
  signin(credentials: SignInCredentials){
    return this.http.post<any>( environment.authUrl + '/signin', credentials)
      .pipe(
        tap((resp)=>{
          console.log('sign in');
          this.signedin$.next(true);
        })
      );
  }
}
