
/* This class is the helpler class for the HTTP Rest calls   */

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


@Injectable()
export class RestTemplate {
    headers: Headers;        //instance variable to hold Headers object
    requestOptions: RequestOptions; //instance variable to hold RequestOptions object
    timeout: number;
    logger: LoggingService;
    retryCount: number;

    // Resolve HTTP using the constructor
    constructor(public http: Http, logger: LoggingService, public configService: ConfigService, ) {
        this.timeout = configService.getConfig("timeout");
        this.retryCount = configService.getConfig("retrycount");
        this.headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9',
        });
        this.requestOptions = new RequestOptions({ headers: this.headers });
        this.logger = logger;

    }

    /* This is GET call which returns the Observable object of requested parameter*/
    public getForObject<T>(url, clazz: { new (): T }): Observable<T> {
        let obj;
        let observableResponse = new Subject<T>();

        this.getForEntity(url, clazz).subscribe(responseEntity => {
            observableResponse.next(responseEntity.getBody());
        },
            err => {
                // Log errors if any
                this.logger.log("Error while fetching data from Get " + err)
                observableResponse.error(new Exception(1001, "Error in load getForObject"))

            });

        return observableResponse.asObservable();

    }


    /* This is GET call which returns the Observable ResponseEntity object*/
    public getForEntity<T>(url, clazz: { new (): T }): Observable<ResponseEntity> {
        let responseEntity: ResponseEntity;
        let observableResponseEntity = new Subject<ResponseEntity>();

        this.getResponse(url).subscribe(response => {
            //convert reponse to ResponseEntity
            responseEntity = this.setResponseEntity(response, clazz);
            observableResponseEntity.next(responseEntity);
        },
            err => {
                // Log errors if any
                this.logger.log("Error while fetching data from getForEntity" + err)
            });

        return observableResponseEntity.asObservable();
    }
    /* This is PUT call which returns the Observable ResponseEntity object*/
    public putForEntity<T>(url, param: any, clazz?: { new (): T }): Observable<ResponseEntity> {
        let responseEntity: ResponseEntity;
        let observableResponseEntity = new Subject<ResponseEntity>();
        this.put(url, param).subscribe(response => {

            if (clazz == undefined || clazz == null) {
                //convert reponse to ResponseEntity
                responseEntity = this.setResponseEntity(response, ResponseMessage);
                observableResponseEntity.next(responseEntity);
            }
            else {
                //convert reponse to ResponseEntity
                responseEntity = this.setResponseEntity(response, clazz);
                observableResponseEntity.next(responseEntity);
            }
        },
            err => {
                // Log errors if any
                this.logger.log("Error while fetching data from Put" + err)
            });

        return observableResponseEntity.asObservable();

    }
    /* This is Delete call which returns the Observable ResponseEntity object*/
    public deleteForEntity<T>(url, key: string, val: string, clazz?: { new (): T }): Observable<ResponseEntity> {

        let responseEntity: ResponseEntity;
        let observableResponseEntity = new Subject<ResponseEntity>();
        this.delete(url, key, val).subscribe(response => {

            if (clazz == undefined || clazz == null) {
                //convert reponse to ResponseEntity
                responseEntity = this.setResponseEntity(response, ResponseMessage);
                observableResponseEntity.next(responseEntity);
            }
            else {
                //convert reponse to ResponseEntity
                responseEntity = this.setResponseEntity(response, clazz);
                observableResponseEntity.next(responseEntity);
            }

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
        this.post(url, param).subscribe(response => {

            if (clazz == undefined || clazz == null) {
                //convert reponse to ResponseEntity
                responseEntity = this.setResponseEntity(response, ResponseMessage);
                observableResponseEntity.next(responseEntity);
            }
            else {
                //convert reponse to ResponseEntity
                responseEntity = this.setResponseEntity(response, clazz);
                observableResponseEntity.next(responseEntity);
            }
        },
            err => {
                // Log errors if any
                this.logger.log("Error while fetching data from post" + err)
            });

        return observableResponseEntity.asObservable();

    }
    /* This method set the response into responseEntity object which has body and header */
    private setResponseEntity<T>(response, clazz: { new (): T }): ResponseEntity {
        let responseEntity: ResponseEntity = new ResponseEntity();
        this.logger.log("reponse json is " + JSON.stringify(response.json()));
        // convert JSON  reponse into object
        let obj = SerializationHelper.deserialize(clazz, response.json());

        this.logger.log("body object is " + JSON.stringify(obj));
        // setting object as a body in responseEntity
        responseEntity.setBody(obj);
        // setting header in responseEntity
        responseEntity.setHeader(response.headers);
        return responseEntity;
    }

    //The post method that uses http post request to send data to server and adds the new data
    private post(url, param: any): Observable<Response> {

        this.logger.log("POST CALL: URL=" + url)
        let body = SerializationHelper.Serialize(param);
        this.logger.log("POST CALL: body=" + body)
        return this.http.post(url, body, this.requestOptions)
            .retryWhen(error => error.delay(500)).retry(this.retryCount)
            .timeout(this.timeout)
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    //The delete method that uses http delete method to delete the data stored in server
    private delete(url, key: string, val: string): Observable<Response> {
        return this.http.delete(url + "/?" + key + "=" + val, this.requestOptions)
            .retryWhen(error => error.delay(500)).retry(this.retryCount)
            .timeout(this.timeout)
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    //The update method that uses http put method to update the existing data saved in server
    private put(url, param: any): Observable<Response> {
        // this.logger.log("PUT CALL: URL=" + url)
        let body = SerializationHelper.Serialize(param);
        return this.http.put(url, body, this.requestOptions)
            .retryWhen(error => error.delay(500)).retry(this.retryCount)
            .timeout(this.timeout)
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    /*private get(url: string): Observable<any[]> {
        // this.logger.log("GET CALL: URL=" + url)
        return this.http.get(url, this.requestOptions)
            .retryWhen(error => error.delay(500)).retry(this.retryCount)
            .timeout(this.timeout)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            //...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }*/

    private getResponse(url: string): Observable<Response> {
        // this.logger.log("GET CALL: URL=" + url)
        return this.http.get(url, this.requestOptions)
            //  .retryWhen(error => error.delay(500)).retry(this.retryCount)
            // .timeout(this.timeout)
            //...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }



}