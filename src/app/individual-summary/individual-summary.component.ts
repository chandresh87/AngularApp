import { Component, OnInit } from '@angular/core';
import { routes as IndividualSummaryRoutes } from './individual-summary-routing.module';
import { routes as AppRoutes } from '../app-routing.module';
import { NavigationService } from '../architecture/navigation/navigation.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { ValidationService } from '../architecture/validation/validation.service';

@Component({
  selector: 'app-individual-summary',
  templateUrl: './individual-summary.component.html',
  styleUrls: ['./individual-summary.component.css']
})
export class IndividualSummaryComponent implements OnInit {
  private nino: string;

  constructor(
    private navigationService: NavigationService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private validationService: ValidationService
  ) {
  }

  ngOnInit() {  
    
    // Combine AppRoutes and Individual Summary Routes
    let routes = AppRoutes.concat(IndividualSummaryRoutes[0].children);
    this.navigationService.setRoutes(routes);

    // Set the current NINo based on search term
    this.setNino();

    // Validate nino and redirect if not valid
    let valid = this.validationService.validateNino(this.nino);
    (valid) ? true : this.router.navigate(['/404']);

  }

  setNino() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.navigationService.setNino(params['nino']);
      this.nino = params['nino'];
    });
  }

  getNino() {
    return this.nino;
  }

}
