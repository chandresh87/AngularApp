import { Injectable } from '@angular/core';
import { ReferenceDataService } from '../reference-data/reference-data.service';
import { ReferenceData } from '../reference-data/reference-data';
import { ReferenceDataType } from '../reference-data/reference-data.enum';
import { Exception } from './exception';

import { NotificationQueue } from './notification.queue.service';
@Injectable()
export class NotificationService {

  constructor(
    private referenceDataService: ReferenceDataService,
    private notificationQueue: NotificationQueue
  ) {
    notificationQueue.notificationQueue$.subscribe(
      message => {
           this.showAlert(message);
      });
  }

  showAlert(error: Exception) {

    //1. Get Error Code
    //2. Search error code in ref data
    //3. determine what type of error it is?
    //4. if user relevant error -> show alert to user
    //5. if system error -> log it silently dont show alert

    let errorCode = error.getErrorCode();
    let errorType = this.getErrorType(errorCode);
    let errorMessage = this.getErrorMessage(error);

    switch (errorType) {
      case 'SYSTEM_ERROR': {
        this.showModal('System Error - Please contact administrator');
      } break;
      case 'BUSINESS_ERROR': {
        this.showModal('Error occured - + ' + errorMessage);
      } break;
    }
  }

  getErrorType(errorCode) {
      return (errorCode >= 1000 && errorCode < 2000) ? 'SYSTEM_ERROR' : 'BUSINESS_ERROR';
  }

  // Check to see if an error matches ref data array key
  getErrorMessage(error: Exception): string {
    let refData: ReferenceData[] = [];
    let message = 'error occured'
    this.referenceDataService.getRefData(ReferenceDataType.ERROR_TYPE)
      .subscribe(response => refData = response)

    refData.forEach(element => {
      if (element.id == error.getErrorCode().toString()) {
        message = element.values
      }
    })
    return message;
  }

  showModal(text) {

    let body = document.getElementsByTagName('body')[0];

    // Add script
    var sTag = document.createElement("script");
    sTag.type = "text/javascript";
    sTag.text = `
      function hideModal() {
        var body = document.getElementsByTagName('body')[0];
        var modal = document.getElementById('modal');
        var overlay = document.getElementById('overlay');
        body.removeChild(modal);
        body.removeChild(overlay);
      }
    `;
    
    body.appendChild(sTag);

    let html = `<div id="overlay" onClick="hideModal()"></div>
                    <div id="modal">
                        <div class="modal__body">
                            <span class="glyphicon glyphicon-remove" onClick="hideModal()"></span>
                            <p>${text}</p>
                            <button class="btn btn-primary" onClick="hideModal()">OK</button>
                        </div>
                    </div>`;
    body.insertAdjacentHTML('beforeend', html);

    // Animate Modal

    // 1. Make #modal opacity: 0 and visibility: hidden by default (in styles - styles.css)
    // 2. Copy animation styles from https://asana.com/ (click login button to see modal)
    // 3. select #modal element in variable
    // 4. Add class to #modal with opacity: 1 and visibility: visible

  }

}
