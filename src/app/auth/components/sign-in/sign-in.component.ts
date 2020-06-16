import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl('',
      [Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern(/^[a-z0-9]+$/)]),
    password: new FormControl('',
      [Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20)]),
  });

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
   if(this.form.invalid){
     return;
   }
   this.authService.signin(this.form.value)
     .subscribe({
       next: value => {
         this.router.navigateByUrl('/inbox')
       },
       error: ({error}) => {
         if(error.username || error.password){
           this.form.setErrors({credentials: true});
         }
       },
       complete: () => {}
     });
  }
}
