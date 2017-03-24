import { ValidationHelper } from '../../../../architecture/validation/ValidationHelper'
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators, FormControl, FormGroup } from '@angular/forms';

export class IndivdualSummaryValidation extends ValidationHelper {

    BuildFormControl(input?: any): any {
        this.validationForm = this.fb.group({
            title: ['', [Validators.required]],
            surname: ['', [Validators.required]],
            forename: ['', [Validators.required]],
            otherForename: ['', [Validators.required]],
            marriageStatus: ['', [Validators.required]],
            gender: ['', [Validators.required]],
            dateOfBirth: ['', [Validators.required]],
            dateOfDeath: ['', [Validators.required]],
            line1: ['', [Validators.required]],
            line2: ['', [Validators.required]],
            line3: ['', [Validators.required]],
            line4: ['', [Validators.required]],
            postcode: ['', [Validators.required]],
            country: ['', [Validators.required]]
        });

        return this.validationForm;
    }
} 