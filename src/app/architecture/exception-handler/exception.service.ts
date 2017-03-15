import { Injectable } from '@angular/core';
import {Exception} from './exception';
import { NotificationQueue } from './notification.queue.service';
import { NotificationService } from './notification.service';

@Injectable()
export class ExceptionService{
constructor(private notificationQueue : NotificationQueue, private notificationService : NotificationService){}
    public throw(err:Exception){
         this.notificationQueue.notify(err);
    }
      
}