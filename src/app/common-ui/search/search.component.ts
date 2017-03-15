import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  private type: string = 'NINO';
  private placeholder: string = 'Search... (AB123456C)';

  constructor() { }

  ngOnInit() { }

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

}
