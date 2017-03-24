import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ChildData } from '../domain/child-data';
import 'rxjs/add/operator/toPromise';

import { Headers, RequestOptions } from '@angular/http';

import { environment } from '../../environment';
// Import RxJs required methods
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/retry';
import { LoggingService } from '../../architecture/logging/logging.service'
import { RestTemplate } from '../../architecture/message-handler/rest-template'
import { ChildDataCollection } from '../domain/child-data-collection';

@Injectable()
export class ChildBenefitHistoryService {
    url: string

    constructor(private logger: LoggingService, public restTemplate: RestTemplate) {
        this.url = '../../assets/data/child-history-data.json'
    }

    getHistory() {
        this.logger.log("get history called");
        return this.restTemplate.getForObject(this.url, ChildDataCollection)
    }

    /*postUpdates(): Observable<any[]> {
        return this.chbHistoryWSHandler.postUpdate();
    }*/

}