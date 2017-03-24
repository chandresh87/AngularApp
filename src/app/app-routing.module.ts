import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './itmp-browser/components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './itmp-browser/components/page-not-found/page-not-found.component';
import { PreferencesComponent } from './itmp-browser/components/preferences/preferences.component';

export const routes: Routes = [

  // Dashboard & Page Not Found
  { path: '',   redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard' } },
  { path: '404', component: PageNotFoundComponent, data: { title: 'Page Not Found', hidden: true } },

  // Preferences
  { 
    path: 'preferences',
    component: PreferencesComponent,
    data: { title: 'Preferences', hidden: true }
  },

  // Child Benefits
  { 
    path: 'child-benefits',
    loadChildren: './child-benefits/child-benefits.module#ChildBenefitsModule',
    data: { title: 'Child Benefits', preload: true }
  },


  // Individual Summary
  {
  path: ':nino',
    loadChildren: './individual-summary/individual-summary.module#IndividualSummaryModule',
    data: { title: '', preload: true }
  },

  // 404
  { path: '**', component: PageNotFoundComponent, data: { title: 'Page Not Found', hidden: true } },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
