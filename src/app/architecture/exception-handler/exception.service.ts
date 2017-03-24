import { Injectable,OnInit, OnDestroy } from '@angular/core';
import { ReferenceDataService } from '../reference-data/reference-data.service';
import { ReferenceData } from '../reference-data/reference-data';
import { ReferenceDataType } from '../reference-data/reference-data.enum';

import {Exception} from './exception';
import { NotificationQueue } from './notification.queue.service';

import { Subscription }   from 'rxjs/Subscription';


@Injectable()
export class ExceptionService{
constructor(private notificationQueue : NotificationQueue){}
    public throw(err:Exception){
         this.notificationQueue.notify(err);
    }    
}