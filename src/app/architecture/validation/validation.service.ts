import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable()
export class ValidationService {

  constructor() { }

  validateNino(nino) {
    var regex = /^(?!BG|GB|NK|KN|TN|NT|ZZ)[A-CEGHJ-PR-TW-Z]{1}[A-CEGHJ-NPR-TW-Z]{1}[0-9]{6}[A-D]{1}$/;
    return regex.test(nino);
  }

}
