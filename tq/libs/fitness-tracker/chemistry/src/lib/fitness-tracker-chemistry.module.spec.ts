import { async, TestBed } from '@angular/core/testing';
import { FitnessTrackerChemistryModule } from './fitness-tracker-chemistry.module';

describe('FitnessTrackerChemistryModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FitnessTrackerChemistryModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FitnessTrackerChemistryModule).toBeDefined();
  });
});
