import { TestBed, inject } from '@angular/core/testing';

import { PreferencesService } from './preferences.service';

describe('PreferencesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PreferencesService]
    });
  });

  it('should ...', inject([PreferencesService], (service: PreferencesService) => {
    expect(service).toBeTruthy();
  }));
});
