import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BuildFormHelper } from '../../../architecture/validation/BuildFormHelper';
import { IndividualSummaryDetails } from './bean/summary-deatils';
import { IndividualSummaryService } from './service/summary.service';
import { IndivdualSummaryValidation } from './validation/summary-validation';
import { FormBuilder } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent extends BuildFormHelper implements OnInit {
  public individualSummary: IndividualSummaryDetails;

  constructor(
    public fb: FormBuilder,
    public indivdualSummaryService: IndividualSummaryService,
    private http: Http,
    private activatedRoute: ActivatedRoute
  ) {
    super(new IndivdualSummaryValidation(fb));
  }

  ngOnInit() {
    this.indivdualSummaryService.getIndivdualSummary().subscribe((result) => {
      this.individualSummary = result;
      this.validationForm.setValue({
        title: result.nameDetails.title,
        surname: result.nameDetails.surname,
        forename: result.nameDetails.forename,
        otherForename: result.nameDetails.otherForename,
        marriageStatus: result.additionalDetails.marriageStatus,
        gender: result.additionalDetails.gender,
        dateOfBirth: result.additionalDetails.dateOfBirth,
        dateOfDeath: result.additionalDetails.dateOfDeath,
        line1: result.address.line1,
        line2: result.address.line2,
        line3: result.address.line3,
        line4: result.address.line4,
        postcode: result.address.postcode,
        country: result.address.county
      })
    }, err => {
      throw err
    });
  }

}