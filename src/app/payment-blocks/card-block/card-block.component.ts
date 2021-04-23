import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { GetMethodsService } from 'src/app/common/get-methods.service';

@Component({
  selector: 'app-card-block',
  templateUrl: './card-block.component.html',
  styleUrls: ['./card-block.component.css']
})
export class CardBlockComponent implements OnInit {

  constructor(private getPaymentMethods : GetMethodsService) { }


  networkOptions = new Array();
  issuerOptions = new Array();

  ngOnInit(): void {
    Object.keys(this.getPaymentMethods.fetchMethods().card_networks).forEach(k => {
     
      if(this.getPaymentMethods.fetchMethods().card_networks[k] != 0)
      {
     
      this.networkOptions.push({label: k, value: k})

      }
    });

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
      key: 'Issuer',
      type: 'select',
      templateOptions: {
        label: 'Issuer',
        multiple: true,
        options: this.issuerOptions
      },
      expressionProperties: {
        'templateOptions.disabled': 'model.issuerAgree',
      },
    },
    {
      className: 'col-3',
      key: 'networkAgree',
      type: 'checkbox',
      defaultValue:true,
      templateOptions: {
        label: 'All Card Networks Enabled',
        required: true,
        
      },
    },
    {
      className: 'col-3',
      key: 'Network',
      type: 'select',
      templateOptions: {
        label: 'Network',
        multiple: true,
        options: this.networkOptions
        
      },
      expressionProperties: {
        'templateOptions.disabled': 'model.networkAgree',
      },
      
    },
    {
      key: 'typeAgree',
      type: 'checkbox',
      defaultValue:true,
      templateOptions: {
        label: 'All Card Types Enabled',
        required: true,
        
      },
    },
    
    {
      className: 'col-3',
      key: 'Type',
      type: 'select',
      templateOptions: {
        label: 'Type',
        multiple: true,
        options: [{label: 'DEBIT', value: 'debit'},{label: 'CREDIT', value: 'credit'}]
      },
      expressionProperties: {
        'templateOptions.disabled': 'model.typeAgree',
      },
    }
  ];

  onSubmit() {
    console.log(this.model);
  }

  toggleDisabled() {
    this.options.formState.disabled = !this.options.formState.disabled;
  }
}
