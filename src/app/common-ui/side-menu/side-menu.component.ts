import { Component, OnInit, AfterViewChecked, OnDestroy, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Http } from '@angular/http';
import { NavigationService } from '../../architecture/navigation/navigation.service';
import { IndividualSummaryComponent } from '../../individual-summary/individual-summary.component';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class SideMenuComponent implements OnInit, OnDestroy {
  private routes: any;
  private subscription: Subscription;

  constructor(
    private _eref: ElementRef,
    private router: Router,
    private route: ActivatedRoute,
    private navigationService: NavigationService,
  ) {
    this.subscribeToRoutes();
  }

  ngOnInit() {
    this.displayRequiredComponents();
  }

  subscribeToRoutes() {
    this.subscription = this.navigationService.routesAnnounced$.subscribe(
      routes => {
        this.routes = routes;
      }
    );
  }

  toggleSideMenu() {
    let sideMenu = document.getElementById('side-menu');
    let main = document.getElementsByTagName('main')[0];
    let visibility = sideMenu.getAttribute('data-visible') == 'false' ? 'true' : 'false';
    sideMenu.setAttribute('data-visible', visibility);
    main.classList.toggle('no-menu');
  }

  hideMenu() {
    let sideMenu = document.getElementById('side-menu');
    sideMenu.setAttribute('data-visible', 'false');
  }

  showMenu() {
    let sideMenu = document.getElementById('side-menu');
    sideMenu.setAttribute('data-visible', 'true');
  }

  mainMenu() {
    let main = document.getElementsByTagName('main')[0];
    main.classList.remove('no-menu');
  }

  mainNoMenu() {
    let main = document.getElementsByTagName('main')[0];
    main.classList.add('no-menu');
  }

  displayRequiredComponents() {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {

        // Page Width
        let width = window.innerWidth
          || document.documentElement.clientWidth
          || document.body.clientWidth;

        let sideMenu = document.getElementById('side-menu');

        if (sideMenu) {
          if (width < 992) {
            this.hideMenu();
            this.mainNoMenu();
          } else {
            this.showMenu();
            this.mainMenu();
          }
        }
      }
    });
  }

  onResize(event) {
    if (event.target.innerWidth < 992) {
      this.hideMenu();
      this.mainNoMenu();
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
