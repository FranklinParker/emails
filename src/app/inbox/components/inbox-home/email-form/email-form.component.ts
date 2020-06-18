import {Component, Input, OnInit} from '@angular/core';
import {Email} from '../../../interface/email';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss']
})
export class EmailFormComponent implements OnInit {
  @Input() email: Email;
  emailForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    const { from, to, subject, text } = this.email;
    this.emailForm = new FormGroup({
      from: new FormControl(from),
      to: new FormControl(to),
      subject: new FormControl(subject),
      text: new FormControl(text)
    })
  }

}
