import { async, TestBed } from '@angular/core/testing';
import { FitnessTrackerAuthModule } from './fitness-tracker-auth.module';

describe('FitnessTrackerAuthModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FitnessTrackerAuthModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FitnessTrackerAuthModule).toBeDefined();
  });
});
