import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
//import {APP_CONFIG_PROVIDERS} from './AppConfiguration/app.configuration';

// Services
import { environment } from '../environment';
import { BreadcrumbService } from 'ng2-breadcrumb/ng2-breadcrumb';
import { NotificationService } from './exception-handler/notification.service';
import { LoggingService } from './logging/logging.service';
import { HelpService } from './help/help.service';
import { NavigationService } from './navigation/navigation.service';
import { PreferencesService } from './preferences/preferences.service';
import { ValidationService } from './validation/validation.service';

import { LoggerWSHandler } from './logging/logger-ws-handler';

/* import { LOGGER_WS_HANDLER_PROVIDER } from './logging/logger-ws-handler';*/
import { ERROR_HANDLER_PROVIDERS } from "./error-handler/custom-error-handler";
// import { ERROR_HANDLER_OPTIONS } from "./error-handler/error-handler-options";

import { ReferenceDataService } from './reference-data/reference-data.service';


import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../in-memory-data.service';

import { ConfigService } from './config/config.service';
import { Initializer } from './initializer'
import { CustomErrorHandler } from './error-handler/custom-error-handler';

//import { NotificationService } from './exception-handler/notification.service';
import { NotificationQueue } from '../architecture/exception-handler/notification.queue.service';
import { ExceptionService } from '../architecture/exception-handler/exception.service';
import { RestTemplate } from './message-handler/rest-template';

@NgModule({
  imports: [
    CommonModule,
    // InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: Initializer,
      deps: [ConfigService],
      multi: true
    },
    ConfigService,
    LoggerWSHandler,
    LoggingService,
    BreadcrumbService,
    NavigationService,
    HelpService,
    NotificationService,
    ExceptionService,
    // NotificationService,
    NotificationQueue,
    ReferenceDataService,
    PreferencesService,
    ValidationService,
    CustomErrorHandler,
    RestTemplate,
    ERROR_HANDLER_PROVIDERS,
    {
      provide: ERROR_HANDLER_PROVIDERS,
      useValue: {
        rethrowError: false,
        unwrapError: false
      }
    }
  ]
})
export class ArchitectureModule {
  constructor(
    private preferences: PreferencesService,
    private breadcrumbService: BreadcrumbService
  ) {

    // Hide dashboard link from breadcrumbs
    this.breadcrumbService.hideRoute('/dashboard');

    // Set users preferred theme if not set to standard
    let theme = this.preferences.getTheme();
    (theme !== 'standard') ? this.preferences.setTheme(theme) : false;

  }
}
