import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ChildBenefitsRoutingModule } from './child-benefits-routing.module';
import { ChildBenefitsComponent } from './child-benefits.component';
import { ChildSearchComponent } from './components/child-search/child-search.component';
import { ChildHistoryComponent } from './components/child-history/child-history.component';
import { ChildBenefitHistoryService } from './services/child-benefit-history.service';
import { ChildClaimantService } from './services/child-claimant.service';
import { ChildClaimantPartnerComponent } from './components/child-claimant-partner/child-claimant-partner.component';
import { ChbClaimantChildDetailsComponent } from './components/chb-claimant-child-details/chb-claimant-child-details.component';

import { ChildComplexEligibilityService } from './components/child-complex-eligibility/ChildComplexEligibilityService';
import { ChildComplexEligibilityComponent } from './components/child-complex-eligibility/child-complex-eligibility.component';
import { ChildSearchHandler } from './services/child-search-handler.service';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    ChildBenefitsRoutingModule
  ],
  providers: [
    ChildSearchHandler,
    ChildBenefitHistoryService,
    ChildClaimantService,
    ChildComplexEligibilityService
  ],
  declarations: [
    ChildBenefitsComponent,
    ChildSearchComponent,
    ChildHistoryComponent,
    ChildClaimantPartnerComponent,
    ChbClaimantChildDetailsComponent,
    ChildComplexEligibilityComponent
  ]
})
export class ChildBenefitsModule {

}
