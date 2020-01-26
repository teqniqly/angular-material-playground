import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { UiMaterialUiModule } from '@tq/ui/material-ui';
@NgModule({
  imports: [
    CommonModule,
    UiMaterialUiModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: WelcomeComponent }
    ])
  ],
  declarations: [WelcomeComponent]
})
export class FitnessTrackerWelcomeModule {}
