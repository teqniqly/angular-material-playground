import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainingMediatorService {
  private timer: NodeJS.Timer;
  private progress$ = new BehaviorSubject<number>(0);
  private isExercising$ = new BehaviorSubject<boolean>(false);
  private progressValue = 0;

  constructor() {}

  get progress() {
    return this.progress$.asObservable();
  }

  get isExercising() {
    return this.isExercising$.asObservable();
  }

  public resumeExercise(): void {
    this.isExercising$.next(true);
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

  public stopExercise(): void {
    this.isExercising$.next(false);
    clearInterval(this.timer);
  }
}
