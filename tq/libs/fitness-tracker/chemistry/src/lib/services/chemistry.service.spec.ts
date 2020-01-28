import { TestBed } from '@angular/core/testing';

import { ChemistryService } from './chemistry.service';

describe('ChemistryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChemistryService = TestBed.get(ChemistryService);
    expect(service).toBeTruthy();
  });
});
