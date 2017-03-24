import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        let routes = document.getElementsByClassName('main-routes')[0];
        (routes) ? this.removeDashboardLogo() : this.addDashboardLogo();
      }
    });
  }

  ngOnInit() {
  }

  addDashboardLogo() {
    let logo = document.getElementById('logo');
    logo.classList.add('logo--dashboard');
  }

  removeDashboardLogo() {
    let logo = document.getElementById('logo');
    logo.classList.remove('logo--dashboard');
  }

}
