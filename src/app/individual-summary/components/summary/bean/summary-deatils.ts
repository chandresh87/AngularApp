import { IndividualSummaryBasicDetails } from './summary-basic-details';
import { IndividualAdditionalDetails } from './summary-additional-details'
import { Address } from './summary-address-details'

export class IndividualSummaryDetails {

    nameDetails: IndividualSummaryBasicDetails;
    additionalDetails: IndividualAdditionalDetails;
    address: Address;

    constructor() {
        this.nameDetails = undefined;
        this.additionalDetails = undefined;
        this.address = undefined;
    }
}