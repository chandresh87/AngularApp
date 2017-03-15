import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Children } from '../domain/children';
import { ChildSearchData } from '../domain/childSearchData';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { InMemoryDataService } from '../../in-memory-data.service';
import { LoggingService } from '../../architecture/logging/logging.service'
import { TOKENS } from '../../../ws-config';
import { ConfigService } from '../../architecture/config/config.service'
import { RestTemplate } from '../../architecture/message-handler/rest-template'

@Injectable()
export class ChildSearchHandler {


    public url;

    constructor(private httpService: Http, configService: ConfigService, logger: LoggingService, public restTemplate: RestTemplate) {

        this.url = `${TOKENS.childSearchURL}`;
    }

    get() {

        return this.restTemplate.getForObject(this.url, ChildSearchData);

    }


}