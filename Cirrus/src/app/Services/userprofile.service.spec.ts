import { TestBed } from '@angular/core/testing';

import { UserprofileService } from './userprofile.service';

describe('UserprofileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserprofileService = TestBed.get(UserprofileService);
    expect(service).toBeTruthy();
  });
});
