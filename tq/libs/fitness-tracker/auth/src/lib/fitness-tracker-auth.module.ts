import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'signup', pathMatch: 'full', component: SignupComponent},
      { path: '**', pathMatch: 'full', component: LoginComponent}
    ])],
  declarations: [SignupComponent, LoginComponent]
})
export class FitnessTrackerAuthModule {}
