import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Email} from '../../../interface/email';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.scss']
})
export class EmailShowComponent implements OnInit {
  email: Email;
  constructor(private activatedRoute: ActivatedRoute) {
  }

  async ngOnInit() {
    this.activatedRoute.data.subscribe(({email})=>{
      this.email = email;
    });

  }

}
