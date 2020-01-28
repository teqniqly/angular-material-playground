import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UiMaterialUiModule } from '@tq/ui/material-ui';
import { ChemistryComponent } from './chemistry/chemistry.component';

@NgModule({
  imports: [
    CommonModule,
    UiMaterialUiModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: ChemistryComponent}
    ])
  ],
  declarations: [ChemistryComponent]
})
export class FitnessTrackerChemistryModule {}
