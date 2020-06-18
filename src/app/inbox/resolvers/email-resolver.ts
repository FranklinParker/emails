import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Email} from '../interface/email';
import {EmailService} from '../email.service';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmailResolver  implements Resolve<Email>{

  constructor(private emailService: EmailService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Email> | Promise<Email> | Email {
    const {id } = route.params;
    return this.emailService.getEmail(id);
  }
}
