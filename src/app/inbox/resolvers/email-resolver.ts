import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Email} from '../interface/email';
import {EmailService} from '../email.service';
import {EMPTY, Observable} from 'rxjs';
import {catchError, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmailResolver  implements Resolve<Email>{

  constructor(private emailService: EmailService,
              private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Email> | Promise<Email> | Email {
    const {id } = route.params;
    return this.emailService.getEmail(id)
      .pipe(
        catchError((err)=>{
          this.router.navigateByUrl('/inbox/not-found');
          return EMPTY;
        })
      );
  }
}
