import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  MatDatepickerInput,
  MatNativeDateModule,
  MatGridTileHeaderCssMatStyler,
  MatDatepickerInputEvent
} from '@angular/material';

@Component({
  selector: 'tq-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  @Output()
  submitClicked: EventEmitter<any> = new EventEmitter<any>();

  public showBirthDateNotSpecifiedError = false;
  public minDate: Date;
  public maxDate: Date;
  public birthDate: Date;

  constructor() {}

  ngOnInit() {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
    this.minDate = new Date(1900, 0);
  }

  onSubmit(form: NgForm): void {
    this.showBirthDateNotSpecifiedError = !this.birthDate;
    console.log(this.birthDate);
    this.submitClicked.emit(form);
  }

  onDateChanged(event: MatDatepickerInputEvent<Date>): void {
    this.birthDate = event.value;
    this.showBirthDateNotSpecifiedError = !this.birthDate;
  }
}
