

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { LoggingService } from '../../../architecture/logging/logging.service';
import { ConfigService } from '../../../architecture/config/config.service';
import { ChildComplexEligibilty } from '../../../child-benefits/domain/child-complex-eligibilty'
import { SerializationHelper } from '../../../architecture/serialization/SerializationHelper';
import { Injectable } from '@angular/core';
import { RestTemplate } from '../../../architecture/message-handler/rest-template'

import { ChbClaimantDetails } from '../chb-claimant-child-details/model/claimant-child-details'
import { ResponseMessage } from '../../../architecture/message-handler/response-message'

@Injectable()
export class ChildComplexEligibilityService {


	constructor(public logger: LoggingService, public http: Http, public configDataService: ConfigService, public restTemplate: RestTemplate) {

	}



	postDataNew(childComplexEligibilty: ChildComplexEligibilty) {

		return this.restTemplate.postForEntity("http://demo3630027.mockable.io/save", childComplexEligibilty);

	}
	getForObject() {
		//return this.restTemplate.getForObject("http://demo3630027.mockable.io/get",ChbClaimantDetails);
	}

}