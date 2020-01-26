import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
  MatFormFieldModule,
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatTabsModule
} from '@angular/material';

@NgModule({
  imports: [CommonModule],
  exports: [
    FlexLayoutModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatTabsModule
  ]
})
export class UiMaterialUiModule {}
