import { Component, OnDestroy, OnInit } from '@angular/core';
import { ConfigService } from './architecture/config/config.service'
import { LoggingService } from './architecture/logging/logging.service'
import { HelpService } from './architecture/help/help.service'
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd, Event } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { environment } from './environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnDestroy, OnInit {

  constructor(
    router: Router,
    activatedRoute: ActivatedRoute,
    titleService: Title,
    private logger: LoggingService,
    private help: HelpService,
    private configDataService: ConfigService
  ) {    
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        var title = this.help.getTitle(router.routerState, router.routerState.root).join(' - ');
        titleService.setTitle(title + ' | ITMP Browser');
      }
    });
    logger.log('app component constructed');
  }

  ngOnDestroy() {} 

  // Print the current environment value from configuration
  ngOnInit() {
    this.logger.log("production environment:" + environment.production);
    var baseurl = this.configDataService.getConfig('baseURL');
    this.logger.log(baseurl)
  }

}
