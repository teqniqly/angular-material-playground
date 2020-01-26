import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TrainingService } from '../services/training.service';
import { Observable } from 'rxjs';
import { Exercise } from '../models';

@Component({
  selector: 'tq-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit {
  public exercises$: Observable<Exercise[]>;

  @Output()
  submitClicked: EventEmitter<void> = new EventEmitter<void>();

  constructor(private trainingService: TrainingService) {}

  ngOnInit() {
    this.exercises$ = this.trainingService.getExercises();
  }

  onSubmitClicked(): void {
    this.submitClicked.emit();
  }
}
