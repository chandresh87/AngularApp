import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { ConfigService } from '../config/config.service'

@Injectable()
export class HelpService {
  private url: string;
  private system: string;
  private panel: string;
  private query: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private configService: ConfigService
  ) {
    this.updateQuery(router);
    this.url = this.configService.getConfig('helpServiceURL')
  }

  setSystem() {
    this.system = this.getTitle(this.router.routerState, this.router.routerState.root)[0];
  }

  getSystem() {
    return this.system;
  }

  setPanel() {
    let currentRoute = this.route.root;
    while (currentRoute.children[0] !== undefined)
      currentRoute = currentRoute.children[0];
    this.panel = currentRoute.snapshot.data['title'];
  }

  getPanel() {
    return this.panel;
  }

  setQuery() {
    let queryString = this.url + '?';
    queryString += (this.system) ? 'system=' + encodeURIComponent(this.system) + '&' : '';
    queryString += (this.panel) ? 'panel=' + encodeURIComponent(this.panel) : '';
    this.query = queryString;
  }

  getQuery() {
    return this.query;
  }

  updateQuery(router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.setSystem();
        this.setPanel();
        this.setQuery();
      }
    });
  }

  getTitle(state, parent) {
    var data = [];
    if (parent && parent.snapshot.data && parent.snapshot.data.title)
      data.push(parent.snapshot.data.title);
    if (state && parent)
      data.push(... this.getTitle(state, state.firstChild(parent)));
    return data;
  }

}
