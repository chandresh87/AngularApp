// Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { Http } from '@angular/http';

// Custom Modules
import { ArchitectureModule } from './architecture/architecture.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { ChildBenefitsModule } from './child-benefits/child-benefits.module';

// Components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ArchitectureModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    ChildBenefitsModule,
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
