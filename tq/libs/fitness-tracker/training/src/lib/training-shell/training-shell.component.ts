import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrainingMediatorService } from '../mediators/training-mediator.service';
import { Subscription } from 'rxjs';
import { ExerciseState } from '../models';

@Component({
  selector: 'tq-training-shell',
  templateUrl: './training-shell.component.html',
  styleUrls: ['./training-shell.component.scss']
})
export class TrainingShellComponent implements OnInit, OnDestroy {
  constructor(public trainingMediator: TrainingMediatorService) {}

  private exerciseStateSubscription: Subscription;

  public exerciseInProgress = false;

  ngOnInit() {
    this.exerciseStateSubscription = this.trainingMediator.exerciseState.subscribe(
      state => {
        if (state === ExerciseState.NotStarted) {
          this.exerciseInProgress = false;
        } else {
          this.exerciseInProgress = true;
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.exerciseStateSubscription.unsubscribe();
  }
}
