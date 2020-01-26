import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material';

@Component({
  selector: 'tq-material-ui-date-picker',
  templateUrl: './material-ui-date-picker.component.html',
  styleUrls: ['./material-ui-date-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MaterialUiDatePickerComponent implements OnInit {

  constructor() { }

  @Input()
  placeholder = 'Choose a date.';

  @Input()
  minDate: Date;

  @Input()
  maxDate: Date;

  @Output()
  dateChanged: EventEmitter<Date> = new EventEmitter<Date>();

  ngOnInit() {
  }

  onDateChanged(event:  MatDatepickerInputEvent<Date>): void {
    this.dateChanged.emit(event.value);
  }

}
