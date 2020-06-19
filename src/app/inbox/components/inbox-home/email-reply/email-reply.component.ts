import {Component, Input, OnInit} from '@angular/core';
import {Email} from '../../../interface/email';
import {EmailService} from '../../../email.service';
import {AuthService} from '../../../../auth/auth.service';

@Component({
  selector: 'app-email-reply',
  templateUrl: './email-reply.component.html',
  styleUrls: ['./email-reply.component.scss']
})
export class EmailReplyComponent implements OnInit {
  showModal = false;
  @Input() email: Email;
  constructor(private authService: AuthService,
              private emailService: EmailService) { }

  ngOnInit(): void {
    this.email = {
      ...this.email,
      to: this.email.from,
      from: this.email.to
    }
  }

  onSendEmail(email: Email) {

  }
}
