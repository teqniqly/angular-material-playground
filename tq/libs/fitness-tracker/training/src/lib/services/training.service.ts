import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Exercise } from '../models';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  constructor() {}

  getExercises(): Observable<Exercise[]> {
    return of([
      new Exercise('Push-ups'),
      new Exercise('Running'),
      new Exercise('Bench press'),
      new Exercise('Sit-ups')
    ]);
  }
}
