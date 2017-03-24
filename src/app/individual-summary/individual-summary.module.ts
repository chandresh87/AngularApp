import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { IndividualSummaryRoutingModule } from './individual-summary-routing.module';
import { IndividualSummaryComponent } from './individual-summary.component';
import { IndividualSummaryService } from './components/summary/service/summary.service';
import { SummaryComponent } from './components/summary/summary.component';
import { SearchComponent } from './components/search/search.component';
import { NameComponent } from './components/name/name.component';
import { AddressComponent } from './components/address/address.component';
import { MarriageCpComponent } from './components/marriage-cp/marriage-cp.component';
import { ContactsComponent } from './components/contacts/contacts.component';

@NgModule({
  imports: [
    CommonModule,
    IndividualSummaryRoutingModule,
    SharedModule
  ],
  providers: [
    IndividualSummaryService
  ],
  declarations: [
    IndividualSummaryComponent,
    SummaryComponent,
    SearchComponent,
    NameComponent,
    AddressComponent,
    MarriageCpComponent,
    ContactsComponent
  ]
})
export class IndividualSummaryModule { }
