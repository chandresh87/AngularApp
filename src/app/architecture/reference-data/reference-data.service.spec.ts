/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import {
  HttpModule, Http, Response, Headers, RequestOptions,
  BaseRequestOptions, XHRBackend, ResponseOptions
} from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { ReferenceDataService } from './reference-data.service';
import { ReferenceData } from './reference-data';
import { ReferenceDataType } from './reference-data.enum';
//import { ReferenceDataWSHandler } from './reference-data-ws-handler';
import { LoggingService } from '../logging/logging.service';
import { LoggerWSHandler } from '../logging/logger-ws-handler';
import { ConfigService } from '../config/config.service';
import { REFDATACACHE } from './reference-data-cache';
import { NotificationQueue } from '../../architecture/exception-handler/notification.queue.service';
import { RestTemplate } from '../message-handler/rest-template';


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
describe('ReferenceDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ReferenceDataService,
        NotificationQueue,
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
  it('should load all the reference data...', inject([ReferenceDataService], (service: ReferenceDataService) => {
    var res = service.loadRefData();
    res.subscribe(res => {
      expect(res[0].values).toEqual("Married or in a civil partnership");
    });
  }));

  /**TEST - To test that getRefData(type) method fetches all the 
  * reference data values for the requested type parameter
  * 
  * */
  it('should get the reference data based on type param...', inject([ReferenceDataService], (service: ReferenceDataService) => {
    var res = service.getRefData(ReferenceDataType.COUNTRY_TYPE);
    res.subscribe(res => {
      expect(res[0].values).toEqual("NORTHERN IRELAND");
      expect(res[1].values).toBe("GREAT BRITAIN");
      expect(res[2].values).toBe("ISLE OF MAN");
      expect(res[3].values).toBe("AUSTRALIA");
    });
  }));

}); 
