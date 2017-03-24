import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Children } from '../domain/children';
import { ChildSearchData } from '../domain/child-search-data';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
//import { InMemoryDataService } from '../../in-memory-data.service';
import { LoggingService } from '../../architecture/logging/logging.service'
import { TOKENS } from '../../../ws-config';
import { ConfigService } from '../../architecture/config/config.service'
import { RestTemplate } from '../../architecture/message-handler/rest-template'

@Injectable()
export class ChildSearchHandler {

    public url = this.configService.getConfig('baseURL_1') + this.configService.getConfig('childSearchService');

    constructor(
        private http: Http,
        public configService: ConfigService,
        private logger: LoggingService,
        public restTemplate: RestTemplate
        //private children: Observable<ChildSearchData>
        ) {
        
    }
    
    /**
   * To get child data on Child Search. Returns an observable for the HTTP GET for the whole of the ReferenceData.
   * The URL for the Child Search data is read from config.
   * @return {Observable}
   */
   // TODO: uncomment implementation when using RestTemplate
    // public getChildData() {
    //     this.logger.log("Entering ChildSearchHandler.getChildData method");
    //     let url = this.configService.getConfig('baseURL_1') + this.configService.getConfig('childSearchService');
    //     return this.restTemplate.getForObject(url, ChildSearchData);
    // }

    // public getChildData(): Observable<Children[]> {
    //     let url = this.configService.getConfig('baseURL_1') + this.configService.getConfig('childSearchService');
    //     return this.http.get(url)
    //         .map(this.extractData);
    // }

    public getChildData(): Observable<Children[]> {

        return this.http.get(this.url)
            .map((res: Response) => {
                let body = res.json();
                return body.data || { }
            });         
    }

    getChildDataOnName (form: any): Observable<Children[]>{
        console.log("Inside Service...form fields: ", form);

        return this.http.get(this.url)
            .map((res: Response) => {
                let body = res.json();
                return body.data || { }
            }); 
    }    

}