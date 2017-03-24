/* * * ../../../architecture/reference-datas/reference-data.service.ts * * */

/**
 * 
 * ReferenceDataService is the service class that calls the RestTemplate
 * for fetching the Reference Data
 * This service can be injected to each view component which needs 
 * the Reference Data.
 * @class ReferenceDataService
 */

//imports
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ReferenceDataType } from './reference-data.enum';

import { ReferenceData } from './reference-data';
import { ConfigService } from '../../architecture/config/config.service';
import { LoggingService } from '../../architecture/logging/logging.service';
import { REFDATACACHE } from './reference-data-cache';

import { Observable } from 'rxjs/Rx';
import { ReferenceDataGroup } from './referenceDataGroup'
import { RestTemplate } from '../message-handler/rest-template';
import { Exception } from '../../architecture/exception-handler/exception';
import { Subject } from 'rxjs/Subject';
import { NotificationQueue } from '../../architecture/exception-handler/notification.queue.service';

@Injectable()
export class ReferenceDataService {

  constructor(private notificationQueue: NotificationQueue,
              private logger: LoggingService,
              public configService: ConfigService,
              public restTemplate: RestTemplate) {
    this.loadRefData().subscribe(
      (data: ReferenceDataGroup) => {
          REFDATACACHE.referenceData = data
      }, 
      err => {
        this.logger.log(err)
          this.notificationQueue.notify(err);
      });
  }

  /**
   * To load reference data on application startup. Returns an observable for the HTTP GET for the whole of the ReferenceData.
   * The URL for the Reference data is read from config.
   * @return {Observable}
   */
  public loadRefData() {
    this.logger.log("Entering ReferenceDataService.loadRefData method");
    let url = this.configService.getConfig('baseURL') + this.configService.getConfig('referenceDataService');
    return this.restTemplate.getForObject(url, ReferenceDataGroup);
  }

  /**
   * Returns an Observable over an array of values matching typeValue.
   * @param {String} typeValue is the name of the reference data type. See {ReferenceDataType}
   * @return {Observable<ReferenceData[]>}
   */
  getRefData(typeValue): Observable<ReferenceData[]> {
    this.logger.log("Entering ReferenceDataService.getRefData method");
    let _retArray: ReferenceData[] = []
    let cache = this

    var observable = Observable.create(function subscribe(observer) {
      // Load from cache if the cache is ready
      if (REFDATACACHE.referenceData != undefined || REFDATACACHE.referenceData != null) {
        _retArray = cache.getRefDataFromCache(typeValue)

        _retArray.length > 0 ? observer.next(_retArray) : observer.error(new Exception(1000, typeValue + " type reference data Not Found"))
      }
      else {
        //Run the  loadRefData() and on completion search and update the result
        cache.loadRefData().subscribe((data: ReferenceDataGroup) => {
            REFDATACACHE.referenceData = data
            _retArray = cache.getRefDataFromCache(typeValue)
            _retArray.length > 0 ? observer.next(_retArray) : observer.error(new Exception(1000, typeValue + " type reference data not found"))
          }, 
          err => {
            cache.logger.log("Error after calling ReferenceDataService.loadRefData" + err)
            cache.notificationQueue.notify(err)
            observer.error(new Exception(1000, typeValue + " type reference data not found"))
          })
      }
    });

    return observable;
  }

  /**  Get call to fetch RefData from REFDATACACHE
  * @method getRefDataFromCache
  * @param {String} typeValue the name of the reference data type of interest
  * @return {ReferenceData[]} An array, one entry for each value of type typeValue
  */
  private getRefDataFromCache(typeValue): ReferenceData[] {
    this.logger.log("Retrieving reference data for type: " + typeValue);
    let _retArray: ReferenceData[] = [];
    var _refData: ReferenceData[] = REFDATACACHE.referenceData.data;
    if (_refData != undefined) {
      _refData.forEach(function (element, index, array) {
        var refData = element;
        if (refData.type == typeValue) {
          _retArray.push(refData);
        }
      });
    }
    else {
      this.logger.log("REFDATACACHE.referenceData.data is undefined");
    }
    return _retArray
  }

}