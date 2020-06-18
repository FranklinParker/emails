import {Component, Input, OnInit} from '@angular/core';
import {Email} from '../../../interface/email';
import {FormControl, FormGroup, Validators} from '@angular/forms';

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
      to: new FormControl(to,[Validators.required, Validators.email]),
      subject: new FormControl(subject, [Validators.required]),
      text: new FormControl(text, [Validators.required])
    })
  }

}
