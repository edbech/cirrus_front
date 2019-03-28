import { TestBed } from '@angular/core/testing';

import { AllUsersService } from './all-users.service';

describe('AllUsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllUsersService = TestBed.get(AllUsersService);
    expect(service).toBeTruthy();
  });
});
