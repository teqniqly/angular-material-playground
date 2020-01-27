import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy
} from '@angular/core';
import { TrainingMediatorService } from '../mediators/training-mediator.service';
import { Subscription } from 'rxjs';
import { ExerciseState } from '../models';

@Component({
  selector: 'tq-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrentTrainingComponent implements OnInit, OnDestroy {
  private exerciseStateSubscription: Subscription;

  public exerciseInProgress = false;

  constructor(public trainingMediator: TrainingMediatorService) {}

  ngOnInit() {
    this.exerciseStateSubscription = this.trainingMediator.exerciseState.subscribe(
      state => {
        if (state === ExerciseState.InProgress) {
          this.exerciseInProgress = true;
        } else {
          this.exerciseInProgress = false;
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.exerciseStateSubscription.unsubscribe();
  }

  onPauseClicked(): void {
    this.trainingMediator.pauseExercise();
  }

  onResumeClicked(): void {
    this.trainingMediator.resumeExercise();
  }

  onStopClicked(): void {
    this.trainingMediator.stopExercise();
  }
}
