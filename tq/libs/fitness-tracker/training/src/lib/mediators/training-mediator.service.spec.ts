import { TestBed } from '@angular/core/testing';

import { TrainingMediatorService } from './training-mediator.service';

describe('TrainingMediatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrainingMediatorService = TestBed.get(
      TrainingMediatorService
    );
    expect(service).toBeTruthy();
  });
});
