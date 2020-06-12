import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService} from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  signedIn$: Observable<boolean>;
  title = 'emails';

  constructor(private authService: AuthService) {
  }
  ngOnInit(): void {
    this.signedIn$ = this.authService.signedin$;
  }
}
