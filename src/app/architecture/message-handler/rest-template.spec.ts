import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { RestTemplate } from './rest-template'
import { TestBed, async, inject } from '@angular/core/testing';
import { ResponseMessage } from './response-message'

describe('UserServiceTest', () => {
    let subject: RestTemplate = null;
    let backend: MockBackend = null;

    beforeEach(inject([RestTemplate, MockBackend], (userService: RestTemplate, mockBackend: MockBackend) => {
        subject = userService;
        backend = mockBackend;

    }));

    it('#RestTemplate GET Call', (done) => {
        backend.connections.subscribe((connection: MockConnection) => {
            let options = new ResponseOptions({
                body: JSON.stringify({ message: true })
            });
            connection.mockRespond(new Response(options));
        });

        subject
            .getForObject("xxxx", ResponseMessage)
            .subscribe((response) => {
                expect(response.message).toEqual(true);
                done();
            });
    });
});

