import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/filter';

@Injectable()
export class NotificationQueue {

    //notification property to hold the current notification as being published by the various components
    private notification = new Subject<any>();

    //Current notification property being exposed as observable for being subscribed by other components
    notificationQueue$ = this.notification.asObservable();

    constructor() { }

    notify(message: any) {
        this.notification.next(message);
    }

}