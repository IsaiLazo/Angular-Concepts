import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }


  noHerrera(control: AbstractControl): {[s:string]: boolean} | null {
    if (control.value?.toLowerCase() === 'herrera') {
      return {
        noHerrera: true
      };
    }
    return null;
  }

}
