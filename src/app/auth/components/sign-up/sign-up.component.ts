import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatchPassword} from '../../validators/match-password';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  form = new FormGroup({
      userName: new FormControl('',
        [Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern(/^[a-z0-9]+$/)]),
      password: new FormControl('',
        [Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20)]),
      passwordConfirmation: new FormControl('',
        [Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20)]),

    }, { validators: [this.matchPassword.validate]}
  )

  constructor(private matchPassword: MatchPassword) {
  }

  ngOnInit(): void {
  }

}
