import { Http, BaseRequestOptions,HttpModule, Response,XHRBackend, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { RestTemplate } from './rest-template'
import { TestBed, async, inject } from '@angular/core/testing';
import { ResponseMessage } from './response-message'
import {LoggingService}  from '../logging/logging.service'
import { ConfigService } from '../config/config.service';
/**
 * Mock LoggingService class for DI injection  
 */
class MockLoggerService {
  // Error type
     log(...args: any[]): void {};
     debug(...args: any[]): void {};
     info(...args: any[]): void {};
     warn(...args: any[]): void {};
     error(...args: any[]): void{};
     assert(assertion: boolean, ...args: any[]): void {};
     fatal(...args: any[]): void{};
}

/**
 * Mock ConfigService class for DI injection 
 */
class MockConfigService {
  getConfig(Key: any) {
    return "mock value returned";
  }
}


describe('RestTemplateTest', () => {
    /*let subject: RestTemplate = null;
    let backend: MockBackend = null;*/

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
           { provide: ConfigService, useClass: MockConfigService },
           { provide: LoggingService, useClass: MockLoggerService },
        RestTemplate,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          deps: [MockBackend, BaseRequestOptions],
          useFactory:
          (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          }
        }
      ],
      imports: [
        HttpModule
      ]
    });
   

    TestBed.compileComponents();
   
  });    

 it('.....GET Call', inject([RestTemplate, MockBackend], (restTemplate: RestTemplate, backend: MockBackend) => {


        backend.connections.subscribe((connection: MockConnection) => {
            let options = new ResponseOptions({
                body: JSON.stringify({ message: true })
            });
            connection.mockRespond(new Response(options));
        });

        restTemplate
            .getForObject("xxxx", ResponseMessage)
            .subscribe((response) => {
                expect(response.message).toEqual(true);
               });
    }));
});

