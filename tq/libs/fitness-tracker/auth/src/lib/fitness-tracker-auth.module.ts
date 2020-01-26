import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UiMaterialUiModule } from '@tq/ui/material-ui';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UiMaterialUiModule,
    RouterModule.forChild([
      { path: 'signup', pathMatch: 'full', component: SignupComponent },
      { path: '**', pathMatch: 'full', component: LoginComponent }
    ])
  ],
  declarations: [SignupComponent, LoginComponent]
})
export class FitnessTrackerAuthModule {}
