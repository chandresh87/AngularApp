import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CommonUiModule } from '../common-ui/common-ui.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PreferencesComponent } from './components/preferences/preferences.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CommonUiModule
  ],
  declarations: [DashboardComponent, PageNotFoundComponent, PreferencesComponent],
  exports: [DashboardComponent, PageNotFoundComponent, PreferencesComponent]
})
export class ItmpBrowserModule {}
