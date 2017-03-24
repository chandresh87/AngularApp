import { Component, OnInit, Input, } from '@angular/core';
import { ChildSearchHandler } from '../../services/child-search-handler.service';
import { Children } from '../../domain/children';
import { InMemoryDataService } from '../../../in-memory-data.service';
import { ChildSearchData } from '../../domain/child-search-data';
import { ChbClaimantChildDetailsComponent } from '../chb-claimant-child-details/chb-claimant-child-details.component';
//import { ChildBenefitsRoutingModule, routes } from '../../child-benefits-routing.module';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-child-search',
    /*  providers: [ChildSearchHandler],*/
    templateUrl: './child-search.component.html',
    styleUrls: ['./child-search.component.css']
})

export class ChildSearchComponent implements OnInit {

    private pageTitle: string;
    birthNumber: Boolean;
    birthNumberValue: number;
    nameAndORDOB: Boolean;
    children: Children[];
    cols: any[];
    //value: number;

    constructor(
        private childrenService: ChildSearchHandler,
        private router: Router) {        
        
        this.birthNumber = false;
        this.nameAndORDOB = false;
        this.pageTitle = 'Child Search';
    }
    ngOnInit() {
        this.cols = [
            { field: 'birthNumberVal', header: 'Birth Number' },
            { field: 'firstName', header: 'Child First Name' },
            { field: 'otherName', header: 'Child Other Names' },
            { field: 'surName', header: 'Child Surname' },
            { field: 'dateOfBirth', header: 'Date of birth' },
            { field: 'nino', header: 'Claimants NINO' }
        ];
        this.birthNumber = true;
        this.nameAndORDOB = false;
    }
    update(value: number) {
        this.birthNumberValue = value;
        this.getChild(this.birthNumberValue);
    }
    getChild(value) {
        this.childrenService.getChildData()
            .subscribe(children => {this.children = children.filter(data => data.birthNumberVal === value) 
                console.log("Returned Child search data in component:", this.children)});            
        
    }
    searchChild(form: any): void{
        console.log("Inside Component...form fields: ", form);
        this.childrenService.getChildDataOnName(form)
            .subscribe(children => {this.children = children
                .filter(data => data.dateOfBirth === form.dateOfBirth) 
                console.log("Returned Child search data in component:", this.children)});   
            
    }
    selectChild (child: Children){
        // console.log("Selected Child: ", child.firstName, child.dateOfBirth );
        this.router.navigate(['/child-benefits/chb-claimant-child-details', child.birthNumberVal]);        
    }

    toggleBirthNumber(e) {
        if (e.target.checked) {
            this.nameAndORDOB = false;
            this.birthNumber = true;
        }
        else {
            this.nameAndORDOB = true;
            this.birthNumber = false;
        }
    }
    toggleNameAndORDOB(e) {
        if (e.target.checked) {
            this.birthNumber = false;
            this.nameAndORDOB = true;
            this.birthNumberValue = null;
        }
        else {
            this.nameAndORDOB = false;
            this.birthNumber = true;
        }
    }
}
