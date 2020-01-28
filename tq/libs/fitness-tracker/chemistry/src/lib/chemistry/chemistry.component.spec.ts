import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChemistryComponent } from '../chemistry/chemistry.component';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UiMaterialUiModule } from '@tq/ui/material-ui';

describe('ChemistryComponent', () => {
  let component: ChemistryComponent;
  let fixture: ComponentFixture<ChemistryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      imports: [UiMaterialUiModule],
      declarations: [ChemistryComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChemistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
