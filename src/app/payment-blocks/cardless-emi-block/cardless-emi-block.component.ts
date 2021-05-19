import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { BlockBuilderServiceService } from 'src/app/block-builder/block-builder-service.service';
import { GetMethodsService } from 'src/app/data-services/get-methods.service';
import { PaymentInstrument } from '../PaymentBlockModels';

@Component({
  selector: 'app-cardless-emi-block',
  templateUrl: './cardless-emi-block.component.html',
  styleUrls: ['./cardless-emi-block.component.css']
})
export class CardlessEmiBlockComponent extends PaymentInstrument implements OnInit {

  constructor(private getPaymentMethods : GetMethodsService, 
    cdRef : ChangeDetectorRef ,
    blockBuilderServiceService:BlockBuilderServiceService) { 
   super(blockBuilderServiceService,cdRef);
       

 }

  cardlessOptions=new Array();
  ngOnInit(): void {
    Object.keys(this.getPaymentMethods.fetchMethods().cardless_emi).forEach(k => {
      this.cardlessOptions.push({label: k, value: k})  
    });
  }

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


  public getConf(): object {
  
   let toReturnObj = {
    method : 'cardless_emi',
    wallets:  this.model.cardlessemi,
   // model:JSON.parse(JSON.stringify(this.model))
   };
  
 //  Object.keys(toReturnObj).forEach(key => toReturnObj[key] === undefined && delete toReturnObj[key])
      return toReturnObj;
    }

}
