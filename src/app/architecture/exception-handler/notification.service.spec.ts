/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import {
  HttpModule, Http, Response, Headers, RequestOptions,
  BaseRequestOptions, XHRBackend, ResponseOptions
} from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
//import { ReferenceDataWSHandler } from './reference-data-ws-handler';
import { LoggingService } from '../logging/logging.service';
import { LoggerWSHandler } from '../logging/logger-ws-handler';
import { NotificationQueue } from '../../architecture/exception-handler/notification.queue.service';
import { RestTemplate } from '../message-handler/rest-template';
import { NotificationService } from '../../architecture/exception-handler/notification.service';
import { ReferenceDataService } from '../../architecture/reference-data/reference-data.service';
import { ConfigService } from '../config/config.service';
/**
 * Mock ConfigService class for DI injection into LoggerWSHandler
 */
class MockConfigService {
  getConfig(Key: any) {
    if (Key === 'baseURL') {
      return "http://demo9396170.mockable.io/";
    } else if (Key === 'referenceDataService') {
      return "referenceData";
    }
    else if (Key === 'COUNTRIES') {
      return "countries";
    }
  }
}
describe('NotificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NotificationService,
        NotificationQueue,
        ReferenceDataService,
        ConfigService,
        RestTemplate,
        LoggerWSHandler,
        LoggingService,
         { provide: ConfigService, useClass: MockConfigService },
      ],
      imports: [
        HttpModule
      ]
    });
    TestBed.compileComponents();
  });


  /**TEST - To test that loadRefData() method fetches all the 
   * reference data values from the url requested
   * 
   * */
  it('should...', inject([NotificationService], (service: NotificationService) => {
     expect(service).toBeTruthy();
  }));
}); 
