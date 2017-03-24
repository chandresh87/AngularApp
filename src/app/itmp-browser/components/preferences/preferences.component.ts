import { Component, OnInit } from '@angular/core';
import { PreferencesService } from '../../../architecture/preferences/preferences.service';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css']
})
export class PreferencesComponent implements OnInit {

  constructor(private preferences: PreferencesService) {}

  ngOnInit() {
  }

}
