import { TestBed } from '@angular/core/testing';

import { WhiskyService } from './whisky.service';

describe('WhiskyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WhiskyService = TestBed.get(WhiskyService);
    expect(service).toBeTruthy();
  });
});
