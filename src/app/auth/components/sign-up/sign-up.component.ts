import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatchPassword} from '../../validators/match-password';
import {UniqueUserName} from '../../validators/unique-user-name';
import {AuthService} from '../../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  form = new FormGroup({
      username: new FormControl('',
        [Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern(/^[a-z0-9]+$/)],
        [this.uniqueUserName.validate]),
      password: new FormControl('',
        [Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20)]),
      passwordConfirmation: new FormControl('',
        [Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20)]),

    }, {validators: [this.matchPassword.validate]}
  )

  constructor(private matchPassword: MatchPassword,
              private authService: AuthService,
              private uniqueUserName: UniqueUserName) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.form.invalid){
      return;
    }
    this.authService.signup(this.form.value)
      .subscribe((resp)=> {
        console.log('signupResult', resp);
      });

  }
}
