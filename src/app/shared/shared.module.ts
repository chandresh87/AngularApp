// Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Custom Modules
import { ItmpBrowserModule } from '../itmp-browser/itmp-browser.module';
import { CommonUiModule } from '../common-ui/common-ui.module';

// Vendor Modules
import { Ng2BreadcrumbModule } from 'ng2-breadcrumb/ng2-breadcrumb';
import { OrderListModule, DataTableModule, TooltipModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [

    // Angular Modules
    FormsModule,
    ReactiveFormsModule,
    HttpModule,

    // Custom Modules
    ItmpBrowserModule,
    CommonUiModule,

    // Vendor Modules
    Ng2BreadcrumbModule,
    OrderListModule,
    DataTableModule,
    TooltipModule

  ]
})
export class SharedModule { }
