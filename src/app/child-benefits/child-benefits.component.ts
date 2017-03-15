import { Component, OnInit } from '@angular/core';
import { routes } from './child-benefits-routing.module';
import { LoggingService } from '../architecture/logging/logging.service';
import { NotificationService } from '../architecture/exception-handler/notification.service';
import { CustomErrorHandler } from '../architecture/error-handler/custom-error-handler';
//import { Exception } from '../architecture/exception-handler/exception';

@Component({
  selector: 'app-child-benefits',
  templateUrl: './child-benefits.component.html',
  styleUrls: ['./child-benefits.component.css']
})
export class ChildBenefitsComponent implements OnInit {
  private pageTitle = 'Welcome to the Child Benefits Service';

  constructor(
    private logger: LoggingService,
    private notificationService: NotificationService,
    private errorHandler: CustomErrorHandler
  ) { }

  ngOnInit() {
    this.logger.log('child benefits loaded---');
  }

}
