import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TrainingService } from '../services/training.service';
import { Observable } from 'rxjs';
import { Exercise } from '../models';
import { TrainingMediatorService } from '../mediators/training-mediator.service';

@Component({
  selector: 'tq-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit {

  public exercises$: Observable<Exercise[]>;

  @Output()
  submitClicked: EventEmitter<void> = new EventEmitter<void>();

  constructor(public trainingMediator: TrainingMediatorService) {}

  ngOnInit() {
    this.exercises$ = this.trainingMediator.getExercises();
  }

  onSubmitClicked(): void {
    this.submitClicked.emit();
  }
}
