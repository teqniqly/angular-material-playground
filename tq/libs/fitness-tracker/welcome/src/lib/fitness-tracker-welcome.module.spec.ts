import { async, TestBed } from '@angular/core/testing';
import { FitnessTrackerWelcomeModule } from './fitness-tracker-welcome.module';

describe('FitnessTrackerWelcomeModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FitnessTrackerWelcomeModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FitnessTrackerWelcomeModule).toBeDefined();
  });
});
