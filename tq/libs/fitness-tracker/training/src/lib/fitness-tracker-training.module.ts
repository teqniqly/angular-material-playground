import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CurrentTrainingComponent } from './current-training/current-training.component';
import { NewTrainingComponent } from './new-training/new-training.component';
import { PastTrainingComponent } from './past-training/past-training.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'new', pathMatch: 'full', component: NewTrainingComponent },
      { path: 'past', pathMatch: 'full', component: PastTrainingComponent },
      { path: '**', pathMatch: 'full', component: CurrentTrainingComponent }
    ])
  ],
  declarations: [
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingComponent
  ]
})
export class FitnessTrackerTrainingModule {}
