import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { BlockBuilderServiceService } from 'src/app/block-builder/block-builder-service.service';
import { GetMethodsService } from 'src/app/data-services/get-methods.service';
import { PaymentInstrument } from '../PaymentBlockModels';

@Component({
  selector: 'app-paylater-block',
  templateUrl: './paylater-block.component.html',
  styleUrls: ['./paylater-block.component.css']
})
export class PaylaterBlockComponent extends PaymentInstrument implements OnInit {
  constructor(private getPaymentMethods : GetMethodsService, 
    cdRef : ChangeDetectorRef ,
    blockBuilderServiceService:BlockBuilderServiceService) { 
   super(blockBuilderServiceService,cdRef);
      
 }

  paylaterOptions=new Array();
  ngOnInit(): void {
    Object.keys(this.getPaymentMethods.fetchMethods().paylater).forEach(k => {
      this.paylaterOptions.push({label: k, value: k})  
    });
  }



  fields: FormlyFieldConfig[] = [
    {
      
      fieldGroupClassName: "row",
      fieldGroup: [
    {
      key: 'paylaterAgree',
      type: 'checkbox',
      defaultValue:true,
      templateOptions: {
        label: 'All Paylater wallets enabled',
        required: true,
        
      },
    },
    {
      className:"col-11",
      key: 'paylater',
      type: 'select',
      templateOptions: {
        label: 'Paylater Wallets',
        multiple: true,
        options: this.paylaterOptions
      },
      expressionProperties: {
        'templateOptions.disabled': 'model.paylaterAgree',
      },
    }]}
  ];


  public getConf(): object {
  
   let toReturnObj = {
    method : 'paylater',
    providers:  this.model.paylater,
   // model:JSON.parse(JSON.stringify(this.model))
   };
  
   //Object.keys(toReturnObj).forEach(key => toReturnObj[key] === undefined && delete toReturnObj[key])
  
      return toReturnObj;
    }
}
