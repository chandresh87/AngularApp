import { Component, OnInit } from '@angular/core';
import { HelpService } from '../../architecture/help/help.service';
import { Subscription }   from 'rxjs/Subscription';
import { Router, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private query: string;

  constructor(
    private helpService: HelpService,
    private router: Router
  ) {}

  ngOnInit() {
    this.router.events
    .filter(event => event instanceof NavigationEnd)
    .subscribe(event => {
      this.query = this.helpService.getQuery();
    })
  }

  toggleSearch() {
    const search = document.getElementById('globalSearch');
    let visible = search.getAttribute('data-visible') == 'false' ? 'true' : 'false';
    let input = search.getElementsByTagName('input')[0];
    search.setAttribute('data-visible', visible);
    input.focus();
    return false;
  }

}
