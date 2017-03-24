// Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { Http } from '@angular/http';

// Custom Modules
import { ArchitectureModule } from './architecture/architecture.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { ItmpBrowserModule } from './itmp-browser/itmp-browser.module';
import { ChildBenefitsModule } from './child-benefits/child-benefits.module';
import { IndividualSummaryModule } from './individual-summary/individual-summary.module';

// Components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    ArchitectureModule,
    SharedModule,
    BrowserModule,
    ItmpBrowserModule,
    ChildBenefitsModule,
    IndividualSummaryModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
