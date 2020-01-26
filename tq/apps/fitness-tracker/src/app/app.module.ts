import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiMaterialUiModule } from '@tq/ui/material-ui';
import { NavListComponent } from './nav-list/nav-list.component';

@NgModule({
  declarations: [AppComponent, NavListComponent],
  imports: [
    BrowserModule,
    UiMaterialUiModule,
    RouterModule.forRoot(
      [
        {
          path: 'auth',
          loadChildren: () =>
            import('@tq/fitness-tracker/auth').then(
              module => module.FitnessTrackerAuthModule
            )
        },
        {
          path: 'training',
          loadChildren: () =>
            import('@tq/fitness-tracker/training').then(
              module => module.FitnessTrackerTrainingModule
            )
        },
        {
          path: '**',
          loadChildren: () =>
            import('@tq/fitness-tracker/welcome').then(
              module => module.FitnessTrackerWelcomeModule
            )
        }
      ],
      { initialNavigation: 'enabled' }
    ),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
