import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TrainingService } from '../services/training.service';
import { Exercise, ExerciseState } from '../models';

@Injectable({
  providedIn: 'root'
})
export class TrainingMediatorService {
  private timer: NodeJS.Timer;
  private progress$ = new BehaviorSubject<number>(0);
  private exerciseState$ = new BehaviorSubject<ExerciseState>(ExerciseState.NotStarted);
  private progressValue = 0;

  constructor(private trainingService: TrainingService) {
    console.log('In mediator constructor.');
  }

  get progress() {
    return this.progress$.asObservable();
  }

  get exerciseState() {
    return this.exerciseState$.asObservable();
  }

  getExercises(): Observable<Exercise[]> {
    return this.trainingService.getExercises();
  }

  public startExercise(): void {
    console.log('Starting exercise.');
    this.progress$.next(0);
    this.progressValue = 0;
    this.resumeExercise();
  }

  public resumeExercise(): void {
    console.log('Resume exercise.');
    this.exerciseState$.next(ExerciseState.InProgress);
    this.timer = setInterval(() => {
      this.progressValue += 10;

      if (this.progressValue >= 100) {
        this.progress$.next(100);
        this.stopExercise();
      } else {
        this.progress$.next(this.progressValue);
      }
    }, 1000);
  }

  public pauseExercise(): void {
    console.log('Pause exercise.');
    this.exerciseState$.next(ExerciseState.Paused);
    clearInterval(this.timer);
  }

  public stopExercise(): void {
    console.log('Stop exercise.');
    this.exerciseState$.next(ExerciseState.Stopped);
    this.progress$.next(0);
    clearInterval(this.timer);
  }
}
