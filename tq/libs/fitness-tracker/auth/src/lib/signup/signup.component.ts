import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'tq-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  @Output()
  submitClicked: EventEmitter<any> = new EventEmitter<any>();

  public minDate: Date;
  public maxDate: Date;
  public birthDate: Date;
  public showTermsError = false;

  constructor() {}

  ngOnInit() {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
    this.minDate = new Date(1900, 0);
  }

  onSubmit(form: NgForm): void {
    console.log(form);

    if (!form.value.agree) {
      this.showTermsError = true;
    } else {
      this.showTermsError = false;
    }

    this.submitClicked.emit(form);
  }

  onDateChanged(date: Date): void {
    this.birthDate = date;
  }
}
