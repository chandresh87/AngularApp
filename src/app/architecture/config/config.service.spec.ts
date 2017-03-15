/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import {
  HttpModule, Http, Response, Headers, RequestOptions,
  BaseRequestOptions, XHRBackend, ResponseOptions
} from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { ConfigService } from './config.service';

/** Unit test class for Configuration service*/

describe('ConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ConfigService,
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
  

  //TEST - To check ConfigService Instance was successfully created
  it('should ...', inject([ConfigService], (service: ConfigService) => {
    expect(service).toBeTruthy();
  }));

 //TEST - to check the env is not yet defined before load method is invoked 
 it('env should not be defined before load() method is called', inject([ConfigService, MockBackend], (service: ConfigService, mock: MockBackend) => {
    // 
    var responses = {};
    responses['./assets/env.json'] = new Response(new ResponseOptions({ body: JSON.stringify({ env: 'development1' }) }));
    responses['./assets/config.json'] = new Response(new ResponseOptions({ body: JSON.stringify({ baseURL: 'www.google.com' }) }));

    mock.connections.subscribe(connection => {
       var response = responses[connection.request.url];
        connection.mockRespond(response);
    });

    
    var env = undefined;
   // service.load();
    try {
     env =  service.getEnv('env')
    }catch(error){
        console.log('Error reading environment value')
    }
    expect(expect(env).toBeUndefined()).toBeFalsy();

  }));


  //TEST - To test that env and config objects are set  after load() method is called. Default config file is set as the env value is not correct.
  it('should return env value as not null...', inject([ConfigService, MockBackend], (service: ConfigService, mock: MockBackend) => {
  
    var responses = {};
    responses['./assets/env.json'] = new Response(new ResponseOptions({ body: JSON.stringify({ env: 'development1' }) }));
    responses['./assets/config.json'] = new Response(new ResponseOptions({ body: JSON.stringify({ baseURL: 'www.google.com' }) }));

    mock.connections.subscribe(connection => {
      console.log("connection.request.url = " + connection.request.url)
       var response = responses[connection.request.url];
        connection.mockRespond(response);
    });
    
    service.load();
    var env = service.getEnv('env')
    expect(env).toEqual('development1');

    env = service.getConfig('baseURL')
    expect(env).toEqual('www.google.com');

  }));

  //TEST - To test that env and config objects are set  after load() method is called. Correct config file is used as the env value is correct.
  it('should return env value as not null...', inject([ConfigService, MockBackend], (service: ConfigService, mock: MockBackend) => {
  
    var responses = {};
    responses['./assets/env.json'] = new Response(new ResponseOptions({ body: JSON.stringify({ env: 'development' }) }));
    responses['./assets/config.json'] = new Response(new ResponseOptions({ body: JSON.stringify({ baseURL: 'www.google.com' }) }));
    responses['./assets/config.development.json'] = new Response(new ResponseOptions({ body: JSON.stringify({ baseURL: 'www.yahoo.com' }) }));

    mock.connections.subscribe(connection => {
       var response = responses[connection.request.url];
        connection.mockRespond(response);
    });
    
    service.load();
    var config = service.getConfig('baseURL')
    expect(config).toEqual('www.yahoo.com');

  }));

});
