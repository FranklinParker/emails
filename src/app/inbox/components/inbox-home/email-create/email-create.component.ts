import { Component, OnInit } from '@angular/core';
import {Email} from '../../../interface/email';


@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.scss']
})
export class EmailCreateComponent implements OnInit {
  showModal = false;
  email: Email = {
    id: '',
    from: '',
    to: '',
    subject: '',
    text: ''

  };
  constructor() { }

  ngOnInit(): void {
  }

}
