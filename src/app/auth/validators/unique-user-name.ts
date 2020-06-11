import {Injectable} from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {AbstractControl, AsyncValidator, ValidationErrors} from '@angular/forms';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})

export class UniqueUserName implements AsyncValidator {
  constructor(private httpClient: HttpClient) {
  }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null>;
  validate(control: AbstractControl): ValidationErrors | null;
  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> | ValidationErrors | null {
    return undefined;
  }
}
