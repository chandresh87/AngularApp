import { Injectable } from '@angular/core';
import { RestTemplate } from '../../../../architecture/message-handler/rest-template';
import { LoggingService } from '../../../../architecture/logging/logging.service';
import { IndividualSummaryDetails } from '../bean/summary-deatils';

@Injectable()
export class IndividualSummaryService {
    
    constructor(public logger: LoggingService, public restTemplate: RestTemplate) {

    }

    public getIndivdualSummary() {
        this.logger.log("Fetching indivdual summary");
        return this.restTemplate.getForObject("../../../assets/data/IndivdualSummary.json", IndividualSummaryDetails);
    }
}