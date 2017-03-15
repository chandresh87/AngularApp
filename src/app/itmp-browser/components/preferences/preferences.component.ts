import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../../architecture/navigation/navigation.service';
import { ConfigService } from '../../../architecture/config/config.service';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css']
})
export class PreferencesComponent implements OnInit {

  constructor(navigationService: NavigationService, private configDataService: ConfigService) {
    navigationService.setRoutes('');
  }

  ngOnInit() {
    var baseurl = this.configDataService.getConfig('baseURL');
    console.log(baseurl)
  }

  setTheme(target) {
    if (target.value === 'standard') {
      this.getTheme('high-contrast') ? this.removeTheme('high-contrast') : false;
    } else if (target.value === 'high-contrast') {
      this.getTheme('high-contrast') ? false : this.addTheme('high-contrast');
    }
  }

  getTheme(theme) {
    let instance = document.getElementById(theme);
    return instance ? true : false;
  }

  addTheme(theme) {
    let head = document.head;
    let link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = '/assets/themes/' + theme + '.css';
    link.id = theme;
    head.appendChild(link);
  }

  removeTheme(theme) {
    let instance = document.getElementById(theme).remove();
  }

}
