import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { NavigationService } from '../../architecture/navigation/navigation.service';
import { IndividualSummaryDetails } from '../../individual-summary/components/summary/bean/summary-deatils';
import { IndividualSummaryService } from '../../individual-summary/components/summary/service/summary.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit, OnDestroy {
  private nino: string;
  private subscription: Subscription;
  private individualSummary: IndividualSummaryDetails;

  constructor(
    private navigationService: NavigationService,
    private individualSummaryService: IndividualSummaryService
  ) {
    this.subscribeToNino();
    this.subscribeToSummary();
  }

  ngOnInit() {
    console.log(this.nino);
    console.log(this.individualSummary);
  }

  subscribeToNino() {
    this.subscription = this.navigationService.ninoAnnounced$.subscribe(
      (nino) => {
        this.nino = nino;
      }
    );
  }

  subscribeToSummary() {
    this.individualSummaryService.getIndivdualSummary().subscribe(
      (summary) => {
        this.individualSummary = summary;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
