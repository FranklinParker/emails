import { Component, OnInit } from '@angular/core';
import {Email} from '../../../interface/email';
import {AuthService} from '../../../../auth/auth.service';
import {EmailService} from '../../../email.service';


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
  constructor(private authService: AuthService,
              private emailService: EmailService) { }

  ngOnInit(): void {
  }

  onSendEmail(email: Email) {
    console.log('email', email);
    this.emailService.sendEmail(email).subscribe(()=>{
      this.showModal = false;
    })

  }
}
