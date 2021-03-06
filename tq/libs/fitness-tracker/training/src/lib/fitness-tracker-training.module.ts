import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UiMaterialUiModule } from '@tq/ui/material-ui';
import { CurrentTrainingComponent } from './current-training/current-training.component';
import { NewTrainingComponent } from './new-training/new-training.component';
import { PastTrainingComponent } from './past-training/past-training.component';
import { TrainingShellComponent } from './training-shell/training-shell.component';

@NgModule({
  imports: [
    CommonModule,
    UiMaterialUiModule,
    RouterModule.forChild([
      { path: 'new', pathMatch: 'full', component: NewTrainingComponent },
      { path: 'past', pathMatch: 'full', component: PastTrainingComponent },
      { path: '**', pathMatch: 'full', component: TrainingShellComponent }
    ])
  ],
  declarations: [
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingComponent,
    TrainingShellComponent
  ]
})
export class FitnessTrackerTrainingModule {}
