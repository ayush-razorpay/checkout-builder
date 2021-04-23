import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { GetMethodsService } from 'src/app/common/get-methods.service';
import { PaymentBlockInterface } from '../PaymentBlocksInterface';

@Component({
  selector: 'app-netbanking-block',
  templateUrl: './netbanking-block.component.html',
  styleUrls: ['./netbanking-block.component.css']
})
export class NetbankingBlockComponent implements OnInit,PaymentBlockInterface {

  constructor(private getPaymentMethods : GetMethodsService) { }

  issuerOptions = new Array();


  ngOnInit(): void {

    Object.keys(this.getPaymentMethods.fetchMethods().netbanking).forEach(k => {
      this.issuerOptions.push({label: this.getPaymentMethods.fetchMethods().netbanking[k], value: k})

    });

  }

  options: FormlyFormOptions = {
    formState: {
      disabled: true,
    },
  };

  form = new FormGroup({});
  model:any = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'issuerAgree',
      type: 'checkbox',
      defaultValue:true,
      templateOptions: {
        label: 'All Issuers Enabled',
        required: true,
        
      },
    },
    {
      key: 'issuers',
      type: 'select',
      templateOptions: {
        label: 'Issuer',
        multiple: true,
        options: this.issuerOptions
      },
      expressionProperties: {
        'templateOptions.disabled': 'model.issuerAgree',
      },
    }
  ];


  toggleDisabled() {
    this.options.formState.disabled = !this.options.formState.disabled;
  }

  public getConfJsob(): object {
  
   let toReturnObj = {
    method : 'netbanking',
    banks:  this.model.issuers,
   };
  
   Object.keys(toReturnObj).forEach(key => toReturnObj[key] === undefined && delete toReturnObj[key])
  
      return toReturnObj;
    }

}
