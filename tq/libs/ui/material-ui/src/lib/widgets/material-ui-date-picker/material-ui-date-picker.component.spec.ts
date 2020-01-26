import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialUiDatePickerComponent } from './material-ui-date-picker.component';
import { UiMaterialUiModule } from '../../ui-material-ui.module';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('MaterialUiDatePickerComponent', () => {
  let component: MaterialUiDatePickerComponent;
  let fixture: ComponentFixture<MaterialUiDatePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      declarations: [MaterialUiDatePickerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialUiDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
