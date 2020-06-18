import { Component, OnInit } from '@angular/core';
import {Email} from '../../../interface/email';
import {AuthService} from '../../../../auth/auth.service';


@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.scss']
})
export class EmailCreateComponent implements OnInit {
  showModal = false;
  email: Email = {
    id: '',
    from: `${this.authService.username}@angular-email.com`,
    to: '',
    subject: '',
    text: ''

  };
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSendEmail(email: Email) {
    console.log('email', email);
  }
}
