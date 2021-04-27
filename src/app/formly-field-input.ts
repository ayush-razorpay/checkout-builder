import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
 selector: 'formly-field-input',
 template: `
 <label for="formly_16_input_currency_1"> Color Picker <span>*</span><!--bindings={
    "ng-reflect-ng-if": "true"
  }--></label>
   <input type="color" class="form-control ng-untouched ng-pristine ng-valid"  [formControl]="formControl" [formlyAttributes]="field" >
   
 `,
})
export class FormlyFieldInput extends FieldType {


}