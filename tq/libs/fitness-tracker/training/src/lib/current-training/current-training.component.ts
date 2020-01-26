import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TrainingMediatorService } from '../mediators/training-mediator.service';

@Component({
  selector: 'tq-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrentTrainingComponent implements OnInit {
  constructor(public trainingMediator: TrainingMediatorService) {}

  ngOnInit() {
    this.trainingMediator.resumeExercise();
  }

  onStopClicked(): void {
    this.trainingMediator.stopExercise();
  }

  onResumeClicked(): void {
    this.trainingMediator.resumeExercise();
  }
}
