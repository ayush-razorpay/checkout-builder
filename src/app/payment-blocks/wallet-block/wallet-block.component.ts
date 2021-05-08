import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { GetMethodsService } from 'src/app/data-services/get-methods.service';
import { PaymentInstrument } from '../PaymentBlockModels';

@Component({
  selector: 'app-wallet-block',
  templateUrl: './wallet-block.component.html',
  styleUrls: ['./wallet-block.component.css']
})
export class WalletBlockComponent extends PaymentInstrument implements OnInit {
 

  constructor(private getPaymentMethods : GetMethodsService) {
    super();
  }
  walletOptions=new Array();
  ngOnInit(): void {
    Object.keys(this.getPaymentMethods.fetchMethods().wallet).forEach(k => {
      this.walletOptions.push({label: k, value: k})  
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
      key: 'walletAgree',
      type: 'checkbox',
      defaultValue:true,
      templateOptions: {
        label: 'All Wallets Enabled',
        required: true,
        
      },
    },
    {
      className:"col-11",
      key: 'wallets',
      type: 'select',
      templateOptions: {
        label: 'Wallets',
        multiple: true,
        options: this.walletOptions
      },
      expressionProperties: {
        'templateOptions.disabled': 'model.walletAgree',
      },
    }]}
  ];


  toggleDisabled() {
    this.options.formState.disabled = !this.options.formState.disabled;
  }

  public getConfJsob(): object {
  
   let toReturnObj = {
    method : 'wallet',
    wallets:  this.model.wallets,
   };
  
   Object.keys(toReturnObj).forEach(key => toReturnObj[key] === undefined && delete toReturnObj[key])
  
      return toReturnObj;
    }


}
