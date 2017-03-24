import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/filter';

@Injectable()
export class NavigationService {

    //routes property to hold the current route as being set by the loaded component
    private routes = new Subject<any>();
    private nino = new Subject<any>();

    //Current route property being exposed as observable for being subscribed by other components
    routesAnnounced$ = this.routes.asObservable();
    ninoAnnounced$ = this.nino.asObservable();

    constructor(/*private router: Router*/) {}

    //setter method for current route
    setRoutes(routes: any) {
      this.routes.next(routes);
    }

    setNino(nino: any) {
      this.nino.next(nino);
    }
    
}