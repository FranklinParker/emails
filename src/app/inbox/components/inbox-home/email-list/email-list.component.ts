import { Component, OnInit } from '@angular/core';
import {EmailService} from '../../../email.service';
import {Observable} from 'rxjs';
import {EmailSummary} from '../../../interface/emailSummary';

@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.scss']
})
export class EmailListComponent implements OnInit {

  emails$: Observable<EmailSummary[] >;
  constructor(private emailService:EmailService) { }

  ngOnInit(): void {
    this.emails$ = this.emailService.getEmails();
  }



}
