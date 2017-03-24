import { Injectable } from '@angular/core';

@Injectable()
export class PreferencesService {

  constructor() { }

  setTheme(theme) {
    localStorage.setItem('theme', theme);
    this.removeTheme('theme');
    this.checkThemeInstance(theme) ? false : this.addTheme(theme);
  }

  getTheme() {
    return localStorage.getItem('theme');
  }

  addTheme(theme) {
    let head = document.head;
    let link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.id = 'theme';
    (theme) ? head.appendChild(link) : false;
    link.href = '/assets/themes/' + theme + '.css';
  }

  removeTheme(theme) {
    let instance = document.getElementById(theme);
    (instance) ? instance.parentNode.removeChild(instance) : false;
  }

  checkThemeInstance(theme) {
    let instance = document.getElementById(theme);
    return instance ? true : false;
  }
  
}
