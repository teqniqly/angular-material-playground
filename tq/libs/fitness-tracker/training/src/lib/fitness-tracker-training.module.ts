import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentTrainingComponent } from './current-training/current-training.component';
import { NewTrainingComponent } from './new-training/new-training.component';
import { PastTrainingComponent } from './past-training/past-training.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CurrentTrainingComponent, NewTrainingComponent, PastTrainingComponent]
})
export class FitnessTrackerTrainingModule {}
