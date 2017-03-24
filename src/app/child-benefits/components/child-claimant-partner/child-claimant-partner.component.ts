import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from 'primeng/primeng';

import { ReferenceDataService } from '../../../architecture/reference-data/reference-data.service';
import { Children } from '../../domain/children';

import { ReferenceData } from '../../../architecture/reference-data/reference-data';
import { ReferenceDataType } from '../../../architecture/reference-data/reference-data.enum';
import { ConfigService } from '../../../architecture/config/config.service';

import { Exception } from '../../../architecture/exception-handler/exception'
import { NotificationService } from '../../../architecture/exception-handler/notification.service';
import { ExceptionService } from '../../../architecture/exception-handler/exception.service';

@Component({
  selector: 'app-child-claimant-partner',
  templateUrl: './child-claimant-partner.component.html',
  styleUrls: ['./child-claimant-partner.component.css'
  ]
})
export class ChildClaimantPartnerComponent implements OnInit {
  private pageTitle: string;
  children: Children[];
  selectedChild: Children;
  errorMessage: string;
  nino: string;
  surnameName: string;
  forenameName: string;
  otherName: string;
  dateOfBirth: string;
  ref: ReferenceData[];
  array: ReferenceData[] = [];

  public refdata_gender: ReferenceData[];
  public refdata_Country: ReferenceData[];
  public refdata_Status: ReferenceData[];

  constructor(
    private referenceDataService: ReferenceDataService,
    private configService: ConfigService,
    private exceptionService:ExceptionService
  ) {
    this.pageTitle = 'Child Benefits-Claimant Partner Details';
  }

  ngOnInit() {
    this.loadReferenceData();
  }


  loadReferenceData() {
    //Load country reference data
    this.referenceDataService.getRefData(ReferenceDataType.COUNTRY_TYPE)
      .subscribe((result) => {
        this.refdata_Country = result
      }, err => {
        throw err
      });

    //Load Gender reference data
    this.referenceDataService.getRefData(ReferenceDataType.GENDER_TYPE)
      .subscribe((result) => {
        this.refdata_gender = result
      }, err => {
             this.exceptionService.throw(err);
      });

    //Load status reference data
    this.referenceDataService.getRefData(ReferenceDataType.STATUS_TYPE)
      .subscribe((result: ReferenceData[]) => {
        this.refdata_Status = result
      }, err => {
        throw err
      });
  }

}     