import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Email} from '../../../interface/email';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss']
})
export class EmailFormComponent implements OnInit {
  @Input() email: Email;
  @Output() emailSend = new EventEmitter<Email>();
  emailForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    const { from, to, subject, text } = this.email;
    this.emailForm = new FormGroup({
      from: new FormControl({value: from, disabled: true}),
      to: new FormControl(to,[Validators.required, Validators.email]),
      subject: new FormControl(subject, [Validators.required]),
      text: new FormControl(text, [Validators.required])
    })
  }
  onSubmitEmail(){
    this.emailSend.emit(this.emailForm.value);
  }

}
