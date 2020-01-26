import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tq-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.scss']
})
export class CurrentTrainingComponent implements OnInit {
  private timer: NodeJS.Timer;
  public progress = 0;
  public exercising = false;

  constructor() {}

  ngOnInit() {
    this.resumeExercise();
  }

  onStopClicked(): void {
    this.stopExercise();
  }

  onResumeClicked(): void {
    this.resumeExercise();
  }

  private stopExercise(): void {
    this.exercising = false;
    clearInterval(this.timer);
  }

  private resumeExercise(): void {
    this.exercising = true;
    this.timer = setInterval(() => {
      this.progress += 10;

      if (this.progress >= 100) {
        this.progress = 100;
        this.stopExercise();
      }
    }, 1000);
  }
}
