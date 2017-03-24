import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ValidationService } from '../../architecture/validation/validation.service';
import { BuildFormHelper } from '../../architecture/validation/BuildFormHelper';
import { SearchValidation } from './SearchValidator';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent extends BuildFormHelper implements OnInit {
  private type: string = 'NINO';
  private placeholder: string = 'Search... (AB123456C)';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private validationService: ValidationService,
    public fb: FormBuilder,
  ) {

    // Search validation class
    super(new SearchValidation(fb, validationService));

    // Page Width
    let width = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;

    router.events.subscribe(event => {
      if (event instanceof NavigationEnd && width < 800) {
        this.hideSearch();
      }
    });
  }

  ngOnInit() { }

  hideSearch() {
    let search = document.getElementById('globalSearch');
    search.setAttribute('data-visible', 'false');
  }

  setType(target) {
    this.type = target.innerText;
    this.placeholder = target.getAttribute('data-placeholder');
    this.setActive(target);
    return false;
  }

  setActive(target) {
    let active = document.getElementsByClassName('active')[0];
    let parent = target.parentNode;
    active.classList.remove('active');
    parent.classList.add('active');
  }

  save(form) {
    let nino = form.value.nino;
    form.reset();
    this.hideSearch();
    this.router.navigate([nino]);
  }

}
