import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { BlockBuilderServiceService } from 'src/app/block-builder/block-builder-service.service';
import { GetMethodsService } from 'src/app/data-services/get-methods.service';
import { PaymentInstrument } from '../PaymentBlockModels';

@Component({
  selector: 'app-cardless-emi-block',
  templateUrl: './cardless-emi-block.component.html',
  styleUrls: ['./cardless-emi-block.component.css']
})
export class CardlessEmiBlockComponent extends PaymentInstrument implements OnInit {

  @Input() id : string ;
  constructor(private getPaymentMethods : GetMethodsService,
    private blockBuilderServiceService : BlockBuilderServiceService) {
    super();
    this.form.valueChanges.subscribe(x=>{
      this.blockBuilderServiceService.updateSubcomponentChange(this.id,this.getConfJsob());
    })
  }
  cardlessOptions=new Array();
  ngOnInit(): void {
    Object.keys(this.getPaymentMethods.fetchMethods().cardless_emi).forEach(k => {
      this.cardlessOptions.push({label: k, value: k})  
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
      key: 'cardlessAgree',
      type: 'checkbox',
      defaultValue:true,
      templateOptions: {
        label: 'All Cardless EMI Enabled',
        required: true,
        
      },
    },
    {
      className:"col-11",
      key: 'cardlessemi',
      type: 'select',
      templateOptions: {
        label: 'Cardless EMI',
        multiple: true,
        options: this.cardlessOptions
      },
      expressionProperties: {
        'templateOptions.disabled': 'model.cardlessAgree',
      },
    }]}
  ];


  toggleDisabled() {
    this.options.formState.disabled = !this.options.formState.disabled;
  }

  public getConfJsob(): object {
  
   let toReturnObj = {
    method : 'cardless_emi',
    wallets:  this.model.cardlessemi,
   };
  
   Object.keys(toReturnObj).forEach(key => toReturnObj[key] === undefined && delete toReturnObj[key])
  
      return toReturnObj;
    }

}
