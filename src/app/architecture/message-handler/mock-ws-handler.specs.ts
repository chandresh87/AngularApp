/* * * ../../../architecture/message-handler/mock-ws-handler.spec.ts * * */
/**
 * 
 * Unit test case for MockWSHandler which extends the abstract class BaseWSHandler
 * 
 * 
 **/
import { TestBed, async, inject } from '@angular/core/testing';
import {
  HttpModule, Http, Response, Headers, RequestOptions,
  BaseRequestOptions, XHRBackend, ResponseOptions, RequestMethod, ResponseType
} from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { MockWSHandler } from './mock-ws-handler';
import { TOKENS } from '../../../ws-config';

// Import RxJs required methods
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/timeout';
import { LoggingService } from '../logging/logging.service';
import { LoggerWSHandler } from '../logging/logger-ws-handler';
import { ConfigService } from '../config/config.service'
import { CustomErrorHandler } from '../error-handler/custom-error-handler';

class MockError extends Response implements Error {
  name: any
  message: any
}

/**
 * Mock ConfigService class for DI injection into LoggerWSHandler
 */
class MockConfigService {
  getConfig(Key: any) {
    return "mock value returned";
  }
}

class CustomErrorHandlerMock {

}
describe('MockWSHandler', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MockWSHandler,
        MockBackend,
        LoggingService,
        LoggerWSHandler,
        { provide: CustomErrorHandler, useClass: CustomErrorHandlerMock },
        { provide: ConfigService, useClass: MockConfigService },
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

  //getHttpService
  it('should ensure httpservice is getting called',
    inject([MockWSHandler], (service: MockWSHandler) => {
      spyOn(service, 'getHttpService').and.callFake(() => { });
      service.getHttpService();
      expect(service.getHttpService).toHaveBeenCalled();
    }));

  //Test case for get()
  it('should perform GET and return an Observable<Array<Response>>',
    async(inject([MockWSHandler, MockBackend], (service: MockWSHandler, mockBackend: MockBackend) => {

      const mockResponse = {
        data: [
          { birthNumberVal: '1234', nino: "AB123456", surnameName: 'John', forenameName: 'Joana', otherName: 'Joshu', dateOfBirth: '01/02/1978' },
          { birthNumberVal: '4567', nino: "AN45678", surnameName: 'Mathew', forenameName: 'Sandra', otherName: 'Joshu', dateOfBirth: '23/04/2001' },
          { birthNumberVal: '890', nino: "DE123456", surnameName: 'Luke', forenameName: 'Anna', otherName: 'Mary', dateOfBirth: '12/12/2005' }
        ]
      };

      mockBackend.connections.subscribe((connection: MockConnection) => {
        expect(connection.request.method).toBe(RequestMethod.Get);
        let contentType = connection.request.headers.get('Content-Type');
        expect(contentType).not.toBeNull();
        expect(contentType).toEqual('application/json');
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(mockResponse)
        })));
        // connection.mockError(new Error("Error"));
      });
      var response = service.get();
      response.subscribe((response) => {
        expect(response[0].birthNumberVal).toEqual('1234');
        expect(response[1].birthNumberVal).toEqual('4567');
        expect(response[2].birthNumberVal).toEqual('890');
      });

    })));

  //Test case for post()
  it('should perform POST and post data to the server',
    async(inject([MockWSHandler, MockBackend], (service: MockWSHandler, mockBackend: MockBackend) => {

      let responseOptions = new ResponseOptions({ body: JSON.stringify({ data: { birthNumberVal: '1234', nino: "AB123456", surnameName: 'John', forenameName: 'Joana', otherName: 'Joshu', dateOfBirth: '01/02/1978' } }) });
      mockBackend.connections.subscribe((connection: MockConnection) => {
        expect(connection.request.method).toBe(RequestMethod.Post);
        let contentType = connection.request.headers.get('Content-Type');
        expect(contentType).not.toBeNull();
        expect(contentType).toEqual('application/json');
        connection.mockRespond(new Response(responseOptions));
      });
      let param = { birthNumberVal: '1234', nino: "AB123456", surnameName: 'John', forenameName: 'Joana', otherName: 'Joshu', dateOfBirth: '01/02/1978' };
      var res = service.post(param);
      res.subscribe(res => {
        expect(res).toEqual(param);

      });

    })));

  //Test case for put()
  it('should perform UPDATE and update data on the server',
    async(inject([MockWSHandler, MockBackend], (service: MockWSHandler, mockBackend: MockBackend) => {

      let responseOptions = new ResponseOptions({ body: JSON.stringify({ data: { birthNumberVal: '1234', nino: "AE5678", surnameName: 'John', forenameName: 'Joana', otherName: 'Joshu', dateOfBirth: '01/02/1978' } }) });
      mockBackend.connections.subscribe((connection: MockConnection) => {
        expect(connection.request.method).toBe(RequestMethod.Put);
        let contentType = connection.request.headers.get('Content-Type');
        expect(contentType).not.toBeNull();
        expect(contentType).toEqual('application/json');
        connection.mockRespond(new Response(responseOptions));
      });
      let param = { birthNumberVal: '1234', nino: "AE5678", surnameName: 'John', forenameName: 'Joana', otherName: 'Joshu', dateOfBirth: '01/02/1978' };
      var res = service.put(param);
      let re = { birthNumberVal: '1234', nino: "AE5678", surnameName: 'John', forenameName: 'Joana', otherName: 'Joshu', dateOfBirth: '01/02/1978' };
      res.subscribe(res => {
        expect(res).toEqual(param);
      });

    })));

  //Test case for delete()
  it('should perform DELETE and delete existing data on the server',
    async(inject([MockWSHandler, MockBackend], (service: MockWSHandler, mockBackend: MockBackend) => {

      let responseOptions = new ResponseOptions({ body: JSON.stringify({ data: { birthNumberVal: '890', nino: "DE123456", surnameName: 'Luke', forenameName: 'Anna', otherName: 'Mary', dateOfBirth: '12/12/2005' } }) });
      mockBackend.connections.subscribe(connection => {
        expect(connection.request.method).toBe(RequestMethod.Delete);
        connection.mockRespond(new Response(responseOptions));
      });
      let key: 'birthNumberVal';
      let value: '890';
      var res = service.delete(key, value);
      let re = { birthNumberVal: '890', nino: "DE123456", surnameName: 'Luke', forenameName: 'Anna', otherName: 'Mary', dateOfBirth: '12/12/2005' };
      res.subscribe(res => {
        expect(res).toEqual(re);
      });
    })));

  //Test case for options()
  it('should perform OPTIONS and get the capabilities of server',
    async(inject([MockWSHandler, MockBackend], (service: MockWSHandler, mockBackend: MockBackend) => {
      let responseOptions = new ResponseOptions({ body: JSON.stringify({ data: { Allow: 'GET,POST,PUT,DELETE' } }) });
      mockBackend.connections.subscribe(connection => {
        expect(connection.request.method).toBe(RequestMethod.Options);
        connection.mockRespond(new Response(responseOptions));
      });
      service.options().subscribe(
        (response) => {
          expect(response).toEqual({ Allow: 'GET,POST,PUT,DELETE' });
          expect(response.ok);
        });

    })));

  //Handle Errors
  it('should handle errors',
    inject([MockWSHandler, MockBackend], (service: MockWSHandler, mockBackend: MockBackend) => {
      mockBackend.connections.subscribe(
        (connection: MockConnection) => {
          spyOn(service, 'handleError').and.callFake(() => { });
          service.handleError(connection.mockError(new Error('some error')));
          expect(service.handleError).toHaveBeenCalled();

          let body = JSON.stringify({ error: `Time out happened` });
          let opts = { type: ResponseType.Error, status: 404, body: body, };
          let responseOpts = new ResponseOptions(opts);
          spyOn(console, 'error');
          service.handleError(connection.mockError(new MockError(responseOpts)));
          expect(service.handleError).toHaveBeenCalled();
          expect(service.handleError).toThrowError();
          expect(console.error).toHaveBeenCalledWith(`Time out happened`);
        });
    }));
});
