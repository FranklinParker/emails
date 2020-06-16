import { Component, OnInit } from '@angular/core';
import {EmailService} from '../../../email.service';
import {SignedInResponse} from '../../../../auth/interface/signedInResponse';
import {environment} from '../../../../../environments/environment';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.scss']
})
export class EmailListComponent implements OnInit {

  constructor(private emailService:EmailService) { }

  ngOnInit(): void {
    this.emailService.getEmails().subscribe({
      next: value => {
        console.log('value', value);
      },
      error: err => {
        console.log('error', err);
      },
      complete: () =>{}
    }
   );
  }



}
