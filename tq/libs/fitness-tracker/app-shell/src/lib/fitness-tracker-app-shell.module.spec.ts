import { async, TestBed } from '@angular/core/testing';
import { FitnessTrackerAppShellModule } from './fitness-tracker-app-shell.module';

describe('FitnessTrackerAppShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FitnessTrackerAppShellModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FitnessTrackerAppShellModule).toBeDefined();
  });
});
