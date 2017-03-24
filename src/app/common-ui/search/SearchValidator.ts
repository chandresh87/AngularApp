import { ValidationHelper } from '../../architecture/validation/ValidationHelper';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ValidationService } from '../../architecture/validation/validation.service';

export class SearchValidation extends ValidationHelper {

  constructor(
    public fb: FormBuilder,
    private validationService: ValidationService
  ) {
    super(fb);
  }

  BuildFormControl(input?: any): any {
    this.validationForm = this.fb.group({
      nino: ['', [Validators.required, this.ninoValidator()]]
    });

    return this.validationForm;
  }

  ninoValidator() {
    return (control: AbstractControl): { [key: string]: any } => {
      const nino = control.value;
      let valid = this.validationService.validateNino(nino);
      return !valid ? { 'invalidNino': { nino } } : null;
    };
  }

  public validationMessages = {
    'default': {
      'required': 'default is required.',
      'minlength': 'default must be at least 4 characters long.',
      'maxlength': 'default cannot be more than 24 characters long.'
    },
    'nino': {
      'required': 'NINO is required.',
      'invalidNino': 'NINO is not Valid'
    }
  };

  public formErrors = {
    'default': '',
    'nino': ''
  };

}

