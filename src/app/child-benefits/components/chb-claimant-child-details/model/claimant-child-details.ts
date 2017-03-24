
import {ChbClaimantBirthDetails} from "./chb-claimant-birth-details"
import {ChbClaimantBasicEligibiltyDetails} from "./chb-claimant-basic-eligibilty"
import {ChbClaimantBasicEligibiltyExtraDetails} from "./chb-child-eligibilty-extra-details"
import {ChbClaimantEducationDetails} from "./chb-child-claimant-education-detail"


export class ChbClaimantDetails
{

birthDetail:ChbClaimantBirthDetails
eligibiltyDetail:ChbClaimantBasicEligibiltyDetails
eligibiltyDetailExtra:ChbClaimantBasicEligibiltyExtraDetails
educationDetail:ChbClaimantEducationDetails
otherChildDetails:ChbClaimantBirthDetails[]


 constructor(public birthDetail1:ChbClaimantBirthDetails, public eligibiltyDetail1:ChbClaimantBasicEligibiltyDetails, public eligibiltyDetailExtra1:ChbClaimantBasicEligibiltyExtraDetails,public educationDetail1:ChbClaimantEducationDetails) {
        this.birthDetail = birthDetail1;
        this.eligibiltyDetail=eligibiltyDetail1;
        this.eligibiltyDetailExtra=eligibiltyDetailExtra1;
        this.educationDetail=educationDetail1;

    }



}

