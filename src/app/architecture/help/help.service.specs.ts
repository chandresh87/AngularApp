/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HelpService } from './help.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

describe('HelpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({

      providers: [HelpService, Router, ActivatedRoute,]
    });
  });

  it('should ...', inject([HelpService, Router], (service: HelpService) => {
    expect(service).toBeTruthy();
  }));
});
