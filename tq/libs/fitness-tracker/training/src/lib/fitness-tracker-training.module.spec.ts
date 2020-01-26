import { async, TestBed } from '@angular/core/testing';
import { FitnessTrackerTrainingModule } from './fitness-tracker-training.module';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('FitnessTrackerTrainingModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      imports: [FitnessTrackerTrainingModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FitnessTrackerTrainingModule).toBeDefined();
  });
});
