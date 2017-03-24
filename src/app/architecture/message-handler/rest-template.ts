
/* This class is the helper class for the HTTP Rest calls   */

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Inject, Injectable } from '@angular/core';
// Import RxJs required methods
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/retry';
// Import the MessageHandler interface
import { LoggingService } from '../logging/logging.service';
import { ConfigService } from '../config/config.service';
import { SerializationHelper } from '../serialization/SerializationHelper';
import { ResponseEntity } from './response-entity'
import { ResponseMessage } from './response-message'
import { Subject } from 'rxjs/Subject';
import {Exception} from '../exception-handler/exception';

/**
 * This class provides a service to the other components of the ITMP Browser.
 * The primary function is to do HTTP GET, PUT, POST or DELETE and to return the
 * header and the body of the server response in a ResponseEntity object.
 * Note that the body element in the ResponseEntity is the object deserialised from
 * the ASCII HTTP body, which should be in JSON format per the headers of the request.
 * @class RestTemplate
 */
@Injectable()
export class RestTemplate {
    headers: Headers;                // headers are hard-coded below
    requestOptions: RequestOptions;  // the http object requires a RequestOptions parameter. It wraps the headers.
    timeout: number;                 // in milliseconds, read from the config
    retryCount: number;              // read from the config

    // Resolve HTTP using the constructor
    constructor(public http: Http, public logger: LoggingService, public configService: ConfigService ) {
        this.timeout = configService.getConfig("timeout");
        this.retryCount = configService.getConfig("retrycount");
        this.headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9',
        });
        this.requestOptions = new RequestOptions({ headers: this.headers });
    }

    /**
     * Make an HTTP GET and extract the body of the Response
     * into an object of class clazz, via getForEntity.
     * @param url is a string holding the URL to GET
     * @param clazz is any constructible class
     * @return {Observable<ResponseEntity>}
     */
    public getForObject<T>(url, clazz: { new (): T }): Observable<T> {
        let obj;
        let observableResponse = new Subject<T>();

        this.getForEntity(url, clazz).subscribe(
            responseEntity => {
                observableResponse.next(responseEntity.getBody());
            },
            err => {
                // Log errors if any
                this.logger.log("Response error found in in RestTemplate.getForObject after calling getForEntity:" + err)
                observableResponse.error(new Exception(1001, "Error in RestTemplate.getForObject" + err))
            });
        return observableResponse.asObservable();
    }

    /**
     * Make an HTTP GET and convert the Response into an Observable<ResponseEntity>
     * via setResponseEntity.
     * ResponseEntity has an HTTP header and body.
     * @param url is a string holding the URL to GET
     * @param clazz is any constructible class
     * @return {Observable<ResponseEntity>}
     */
    public getForEntity<T>(url, clazz: { new (): T }): Observable<ResponseEntity> {
        let responseEntity: ResponseEntity;
        let observableResponseEntity = new Subject<ResponseEntity>();

        this.get(url).subscribe(
            response => {
                //convert reponse to ResponseEntity
                responseEntity = this.setResponseEntity(response, clazz);
                observableResponseEntity.next(responseEntity);
            },
            err => {
                // Log errors if any
                this.logger.log("Response error found in in RestTemplate.getForEntity after calling http.get:" + err)
            });

        return observableResponseEntity.asObservable();
    }

  /**
     * Make an HTTP PUT and convert the Response into an Observable<ResponseEntity>,
     * via setResponseEntity.
     * @param url is a string holding the URL to GET
     * @param clazz is any constructible class
     * @return {Observable<ResponseEntity>}
     */
    public putForEntity<T>(url, param: any, clazz?: { new (): T }): Observable<ResponseEntity> {
        let responseEntity: ResponseEntity;
        let observableResponseEntity = new Subject<ResponseEntity>();
        this.put(url, param).subscribe(
            response => {
                //convert reponse to ResponseEntity
                responseEntity = this.setResponseEntity(response, ResponseMessage);
                observableResponseEntity.next(responseEntity);
            },
            err => {
                // Log errors if any
                this.logger.log("Response error found in in RestTemplate.putForEntity after calling http.put:" + err)
            });

        return observableResponseEntity.asObservable();

    }
    /* This is Delete call which returns the Observable ResponseEntity object*/
    public deleteForEntity<T>(url, key: string, val: string, clazz?: { new (): T }): Observable<ResponseEntity> {

        let responseEntity: ResponseEntity;
        let observableResponseEntity = new Subject<ResponseEntity>();
        this.delete(url, key, val).subscribe(
            response => {
                //convert reponse to ResponseEntity
                responseEntity = this.setResponseEntity(response, clazz);
                observableResponseEntity.next(responseEntity);
            },
            err => {
                // Log errors if any
                this.logger.log("Error while fetching data from Delete" + err)
            });

        return observableResponseEntity.asObservable();
    }
    /* This is POST call which returns the Observable ResponseEntity object*/
    public postForEntity<T>(url, param: any, clazz?: { new (): T }): Observable<ResponseEntity> {

        let observableResponseEntity = new Subject<ResponseEntity>();
        let responseEntity: ResponseEntity;
        this.post(url, param).subscribe(
            response => {
                //convert reponse to ResponseEntity
                responseEntity = this.setResponseEntity(response, clazz);
                observableResponseEntity.next(responseEntity);
            },
            err => {
                // Log errors if any
                this.logger.log("Error while fetching data from post" + err)
            });

        return observableResponseEntity.asObservable();

    }

    /**
     * ResponseEntity has an HTTP header and body, both derived from the
     * Response object received from the http call.
     * The body is deserialised to an object of class clazz when the
     * ResponseEntity is populated.
     * If clazz is undefined or null, ResponseMessage is used instead.
     * @param {Response} response is the response from an http call.
     * @param clazz is any constructible class
     * @return {ResponseEntity}
     */
    private setResponseEntity<T>(response, clazz: { new (): T }): ResponseEntity {
        let responseEntity: ResponseEntity = new ResponseEntity();
        this.logger.log("reponse json is " + JSON.stringify(response.json()));
        // convert JSON  reponse into object
        if (clazz == undefined || clazz == null) {
            // assert to ensure that we don't get into an infinite loop
            this.logger.assert( ! ( ResponseMessage == undefined || ResponseMessage == null), "ResponseMessage is undefined or null!" )
            //use ResponseMessage. The body will be held as a string
            responseEntity = this.setResponseEntity(response, ResponseMessage);
        } else {
            let obj = SerializationHelper.deserialize(clazz, response.json());
            this.logger.log("body object is " + JSON.stringify(obj));
            responseEntity.setBody(obj);
            responseEntity.setHeader(response.headers);
        }
        return responseEntity;
    }

   /**
    * Calls http.post
    * @param url the url to DELETE
    * @param param the content for the body of the POST
    * @return Observable<Response>
    */
    //The post method that uses http post request to send data to server and adds the new data
    private post(url, param: any): Observable<Response> {

        this.logger.log("POST CALL: URL=" + url)
        let body = SerializationHelper.Serialize(param);
        this.logger.log("POST CALL: body=" + body)
        return this.http.post(url, body, this.requestOptions)
            .retryWhen(error => error.delay(500)).retry(this.retryCount)
            .timeout(this.timeout)
            .catch((error: any) => Observable.throw(error.json().error || 'Error when calling http.post in RestTemplate.post: ' + error));
    }

   /**
    * Calls http.delete
    * @param url the url to DELETE
    * @param {String} key to identify the item to delete
    * @param {String} val ???
    * @return Observable<Response>
    */
    private delete(url, key: string, val: string): Observable<Response> {
        return this.http.delete(url + "/?" + key + "=" + val, this.requestOptions)
            .retryWhen(error => error.delay(500)).retry(this.retryCount)
            .timeout(this.timeout)
            .catch((error: any) => Observable.throw(error.json().error || 'Error when calling http.delete in RestTemplate.delete: ' + error));
    }

   /**
    * Calls http.put
    * @param url the url to PUT
    * @param param the content for the body of the PUT
    * @return Observable<Response>
    */
    private put(url, param: any): Observable<Response> {
        // this.logger.log("PUT CALL: URL=" + url)
        let body = SerializationHelper.Serialize(param);
        return this.http.put(url, body, this.requestOptions)
            .retryWhen(error => error.delay(500)).retry(this.retryCount)
            .timeout(this.timeout)
            .catch((error: any) => Observable.throw(error.json().error || 'Error when calling http.put in RestTemplate.put: ' + error));
    }

     /**
    * Calls http.get
    * @param url the url to GET
    * @return Observable<Response>
    */
    private get(url: string): Observable<Response> {
        this.logger.log("GET: " + url)
        return this.http.get(url, this.requestOptions)
            .retryWhen(error => error.delay(500))
            .retry(this.retryCount)
            .timeout(this.timeout)
            .catch((error: any) => Observable.throw(error.json().error || 'Error when calling http.get in RestTemplate.get: ' + error));
    }
}