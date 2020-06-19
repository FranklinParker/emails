import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Email} from '../../../interface/email';
import {EmailService} from '../../../email.service';
import {AuthService} from '../../../../auth/auth.service';

@Component({
  selector: 'app-email-reply',
  templateUrl: './email-reply.component.html',
  styleUrls: ['./email-reply.component.scss']
})
export class EmailReplyComponent implements OnInit, OnChanges {
  showModal = false;
  @Input() email: Email;
  constructor(private authService: AuthService,
              private emailService: EmailService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.email = {
      ...this.email,
      to: this.email.from,
      from: this.email.to,
      subject: `RE: ${this.email.subject}`,
      text: `\n\n\n --- ${this.email.from} wrote \n>${this.email.text}`
    };
  }

  ngOnInit(): void {

  }

  onSendEmail(email: Email) {
    this.emailService.sendEmail(email)
      .subscribe(()=>{
        this.showModal = false;
      })

  }
}
