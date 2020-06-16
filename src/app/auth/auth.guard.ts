import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanLoad,
  Route,
  UrlSegment, Router
} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from './auth.service';
import { skipWhile, take, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {
  constructor(private authService: AuthService,
              private router:Router) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.getSignedIn().pipe(
      skipWhile(value=> value === null),
      take(1)
    );
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.getSignedIn().pipe(
      skipWhile(value=> value === null),
      take(1),
      tap(authenticated=>{
        if(!authenticated){
          this.router.navigateByUrl('/');
        }

      })
    );
  }

}
