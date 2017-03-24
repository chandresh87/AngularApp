import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChildBenefitsComponent } from './child-benefits.component';
import { ChildSearchComponent } from './components/child-search/child-search.component';
import { ChildHistoryComponent } from './components/child-history/child-history.component';
import { ChildClaimantPartnerComponent } from './components/child-claimant-partner/child-claimant-partner.component';
import { ChbClaimantChildDetailsComponent } from './components/chb-claimant-child-details/chb-claimant-child-details.component';
import { ChildComplexEligibilityComponent } from './components/child-complex-eligibility/child-complex-eligibility.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: '', component: ChildBenefitsComponent, data: { title: '' }, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, data: { title: 'Child Benefits Home' } },
      { path: 'child-search', component: ChildSearchComponent, data: { title: 'Child Search' } },
      { path: 'child-history', component: ChildHistoryComponent, data: { title: 'Child History' } },
      { path: 'child-claimant-partner', component: ChildClaimantPartnerComponent, data: { title: 'Child Claimant Partner' } },
      { path: 'chb-claimant-child-details/:birthNumberVal', component: ChbClaimantChildDetailsComponent, data: { title: 'Chb Claimant Child Details' } },
      { path: 'chb-complex-eligibility', component: ChildComplexEligibilityComponent, data: { title: 'Chb Complex Eligibility' } },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})

export class ChildBenefitsRoutingModule { }
