/* * * ./app/modules/services/basewebservicehandler.service.ts * * */
// Imports
import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

//import { environment } from '../../environment';
// Import RxJs required methods
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/retry';
import { Log } from './log'
// Import the MessageHandler interface
import { MessageHandler } from '../message-handler/message-handler';
import { ConfigService } from '../config/config.service';
/*
export interface LOGGER_WS_HANDLER_OPTIONS {
    url: string;
    
}

export var LOGGER_WS_HANDLER_OPTIONS: LOGGER_WS_HANDLER_OPTIONS = {
     url: environment.loggerURL
};*/

@Injectable()
export class LoggerWSHandler implements MessageHandler {

    url: string;             //instance variable to hold the logger url
    headers: Headers;        //instance variable to hold Headers object
    requestOptions: RequestOptions; //instance variable to hold RequestOptions object
    timeout: number;         // read from the config
    retryCount: number;      // read from the config
    //private configOptions: LOGGER_WS_HANDLER_OPTIONS;

    constructor(private http: Http, private configService: ConfigService) {
        //this.url = configService.getConfig('baseURL') + configService.getConfig('loggerURL');  
		this.url = configService.getConfig('newLogUrl') ;
        this.timeout = configService.getConfig("timeout");
        this.retryCount = configService.getConfig("retrycount");
        this.headers = new Headers({
            'Content-Type': 'application/json'
         
        });
        this.requestOptions = new RequestOptions({ headers: this.headers });
    }


    //The get method that returns http service injected into the constructor
  //  getHttpService() {
  //      return this.http;
  //  }

    //The get method that uses http get request to fetch the data from server
    get(): Observable<any[]> {
        return this.http.get(this.url, this.requestOptions)
            .retryWhen(error => error.delay(500)).retry(this.retryCount)
            .timeout(this.timeout)
            .map(this.extractResponseData)
            .catch(this.handleError);
    }

    //The post method that uses http post request to send data to server and adds the new data
    post(...param: any[]): Observable<any[]> {
        console.log("POST CALL: URL=" + this.url)
        var body = ''
        try {
            body = JSON.stringify(param);
        } catch (error) {
            body = 'Error in LoggingService.post stringifying the parameters to POST: ' + error
            console.log(body)
        }

        console.log("POST CALL: body=" + JSON.stringify(new Log(body)));

        return this.http.post(this.url, JSON.stringify(new Log(body)), this.requestOptions)
            .retryWhen(error => error.delay(500)).retry(this.retryCount)
            .timeout(this.timeout)
            .map(this.extractResponseData)
            .catch(this.handleError);
    }

    //The update method that uses http put method to update the existing data saved in server
    put(param: any): Observable<any[]> {
        let body = JSON.stringify(param);
        return this.http.put(this.url, body, this.requestOptions)
            .retryWhen(error => error.delay(500)).retry(this.retryCount)
            .timeout(this.timeout)
            .map(this.extractResponseData)
            .catch(this.handleError);
    }

    //The delete method that uses http delete method to delete the data stored in server
    delete(key: string, val: string): Observable<any> {
        return this.http.delete(this.url + "/?" + key + "=" + val, this.requestOptions)
            .retryWhen(error => error.delay(500)).retry(this.retryCount)
            .timeout(this.timeout)
            .map(this.extractResponseData)
            .catch(this.handleError);
    }

    //The options method that uses http options method to determine the options and/or requirements associated 
    //with a resource or the capabilities of a server 
    options(): Observable<any> {
        return this.http.request(this.url, { method: 'OPTIONS' })
            .retryWhen(error => error.delay(500)).retry(this.retryCount)
            .timeout(this.timeout)
            .map(this.extractResponseData)
            .catch(this.handleError);
    }

    extractResponseData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Observable.throw(errMsg);
    }
}