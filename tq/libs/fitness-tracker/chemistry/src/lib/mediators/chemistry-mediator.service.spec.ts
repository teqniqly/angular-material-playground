import { TestBed } from '@angular/core/testing';

import { ChemistryMediatorService } from './chemistry-mediator.service';

describe('ChemistryMediatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChemistryMediatorService = TestBed.get(
      ChemistryMediatorService
    );
    expect(service).toBeTruthy();
  });
});
