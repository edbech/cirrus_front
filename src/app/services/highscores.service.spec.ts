import { TestBed } from '@angular/core/testing';

import { HighscoresService } from './highscores.service';

describe('HighscoresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HighscoresService = TestBed.get(HighscoresService);
    expect(service).toBeTruthy();
  });
});
