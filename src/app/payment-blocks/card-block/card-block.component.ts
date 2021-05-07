import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { GetMethodsService } from 'src/app/data-services/get-methods.service';
import { PaymentInstrument } from '../PaymentBlockModels';

@Component({
  selector: 'app-card-block',
  templateUrl: './card-block.component.html',
  styleUrls: ['./card-block.component.css']
})
export class CardBlockComponent extends PaymentInstrument implements OnInit {

  constructor(private getPaymentMethods : GetMethodsService) { 
    super();
  }
  


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
      
        fieldGroupClassName: "row",
        fieldGroup: [
    {
      className: 'col-6',
      key: 'issuerAgree',
      type: 'checkbox',
      defaultValue:true,
      templateOptions: {
        label: 'All Issuers Enabled',
        required: true,
        
      },
    },
    {
      className: 'col-6',
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
    },
    {
      className: 'col-6',
      key: 'networkAgree',
      type: 'checkbox',
      defaultValue:true,
      templateOptions: {
        label: 'All Card Networks Enabled',
        required: true,
        
      },
    },
    {
      className: 'col-6',
      key: 'networks',
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
      className: 'col-6',
      key: 'typeAgree',
      type: 'checkbox',
      defaultValue:true,
      templateOptions: {
        label: 'All Card Types Enabled',
        required: true,
        
      },
    },
    
    {
      className: 'col-6',
      key: 'types',
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
        ]}
  ];


  toggleDisabled() {
    this.options.formState.disabled = !this.options.formState.disabled;
  }


 public getConfJsob(): object {

  console.log("why is this method not getting called");

  
 console.log('')

 let toReturnObj = {
  method : 'card',
  issuers:  this.model.issuers,
  networks: this.model.networks,
  types:this.model.types,
 };

 Object.keys(toReturnObj).forEach(key => toReturnObj[key] === undefined && delete toReturnObj[key])

    return toReturnObj;
  }
}
