import { Component, OnInit } from '@angular/core';
import { BuildFormHelper } from '../../../architecture/validation/BuildFormHelper';
import { ChildComplexEligibilityValidation } from './ChildComplexEligibilityValidator';
import { FormBuilder } from '@angular/forms';
import { ChildComplexEligibilty } from '../../../child-benefits/domain/child-complex-eligibilty'
import { ChildComplexEligibilityService } from './ChildComplexEligibilityService';
import { ResponseMessage } from '../../../architecture/message-handler/response-message'
import { ResponseEntity } from '../../../architecture/message-handler/response-entity'


@Component({
  selector: 'child-complex-eligibility',
  templateUrl: './child-complex-eligibility.component.html',
  styleUrls: ['./child-complex-eligibility.component.css']
})

export class ChildComplexEligibilityComponent extends BuildFormHelper implements OnInit {

  childComplexEligibilty: ChildComplexEligibilty;
  UserName = "MR K BOLAM";
  formSubmittedMessage;

  constructor(public fb: FormBuilder, public service: ChildComplexEligibilityService) {

    super(new ChildComplexEligibilityValidation(fb))
  }

  ngOnInit() { }

  onSubmit() {

    this.childComplexEligibilty = this.getSubmittedValues();
    // this.formSubmittedMessage = this.service.postData(this.childComplexEligibilty);
    let responseEntity: ResponseEntity;
    let responseMessage: ResponseMessage;

    this.service.postDataNew(this.childComplexEligibilty).subscribe(
      reponse => {
        console.log("returned respons is" + reponse);
        responseEntity = reponse;
        responseMessage = responseEntity.getBody();
        console.log("response is " + responseMessage.message);
      });




    this.formSubmittedMessage = "Details Saved Successfully";
  }

  reset() {
    this.childComplexEligibilty = new ChildComplexEligibilty();
    this.resetInput();
    this.formSubmittedMessage = "";
  }
}
