import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EmailService} from '../../../email.service';
import {switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Email} from '../../../interface/email';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.scss']
})
export class EmailShowComponent implements OnInit {
  email: Email;
  constructor(private activatedRoute: ActivatedRoute,
              private emailService: EmailService) {
  }

  async ngOnInit() {
    this.activatedRoute.data.subscribe(({email})=>{
      this.email = email;
    });

  }

}
