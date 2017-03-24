import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndividualSummaryComponent } from './individual-summary.component';
import { SummaryComponent } from './components/summary/summary.component';
import { SearchComponent } from './components/search/search.component';
import { NameComponent } from './components/name/name.component';
import { AddressComponent } from './components/address/address.component';
import { MarriageCpComponent } from './components/marriage-cp/marriage-cp.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { UnderConstructionComponent } from '../itmp-browser/components/under-construction/under-construction.component';

export const routes: Routes = [
  {
    path: '', component: IndividualSummaryComponent, data: { title: '' }, children: [
      { path: '', redirectTo: 'individual', pathMatch: 'full' },
      {
        path: 'individual', data: { title: 'Individual' }, children: [
          { path: '', redirectTo: 'summary', pathMatch: 'full' },
          { path: 'summary', component: SummaryComponent, data: { title: 'Summary' } },
          { path: 'name', component: UnderConstructionComponent, data: { title: 'Name' } },
          { path: 'address', component: AddressComponent, data: { title: 'Address' } },
          { path: 'marriage-cp', component: UnderConstructionComponent, data: { title: 'Marriage/CP' } },
          { path: 'contacts', component: UnderConstructionComponent, data: { title: 'Contacts' } },
        ]
      },
      {
        path: 'employment', data: { title: 'Employment' }, children: [
          { path: '', redirectTo: 'dummy1', pathMatch: 'full' },
          { path: 'dummy1', component: UnderConstructionComponent, data: { title: 'Dummy Link' } },
          { path: 'dummy2', component: UnderConstructionComponent, data: { title: 'Dummy Link' } },
          { path: 'dummy3', component: UnderConstructionComponent, data: { title: 'Dummy Link' } },
        ]
      },
      {
        path: 'tax-coding', data: { title: 'Tax Coding' }, children: [
          { path: '', redirectTo: 'dummy1', pathMatch: 'full' },
          { path: 'dummy1', component: UnderConstructionComponent, data: { title: 'Dummy Link' } },
          { path: 'dummy2', component: UnderConstructionComponent, data: { title: 'Dummy Link' } },
          { path: 'dummy3', component: UnderConstructionComponent, data: { title: 'Dummy Link' } },
        ]
      },
      {
        path: 'work-items', data: { title: 'Work Items' }, children: [
          { path: '', redirectTo: 'dummy1', pathMatch: 'full' },
          { path: 'dummy1', component: UnderConstructionComponent, data: { title: 'Dummy Link' } },
          { path: 'dummy2', component: UnderConstructionComponent, data: { title: 'Dummy Link' } },
          { path: 'dummy3', component: UnderConstructionComponent, data: { title: 'Dummy Link' } },
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class IndividualSummaryRoutingModule { }
