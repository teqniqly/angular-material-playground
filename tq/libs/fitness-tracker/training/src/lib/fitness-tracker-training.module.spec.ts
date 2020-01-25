import { async, TestBed } from '@angular/core/testing';
import { FitnessTrackerTrainingModule } from './fitness-tracker-training.module';

describe('FitnessTrackerTrainingModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FitnessTrackerTrainingModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FitnessTrackerTrainingModule).toBeDefined();
  });
});
