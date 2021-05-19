import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { BlockBuilderServiceService } from 'src/app/block-builder/block-builder-service.service';
import { GetMethodsService } from 'src/app/data-services/get-methods.service';
import { PaymentInstrument } from '../PaymentBlockModels';


@Component({
  selector: 'app-netbanking-block',
  templateUrl: './netbanking-block.component.html',
  styleUrls: ['./netbanking-block.component.css']
})
export class NetbankingBlockComponent extends PaymentInstrument implements OnInit {
  constructor(private getPaymentMethods : GetMethodsService, 
    cdRef : ChangeDetectorRef ,
    blockBuilderServiceService:BlockBuilderServiceService) { 
   super(blockBuilderServiceService,cdRef);
 }


  issuerOptions = new Array();

  ngOnInit(): void {
    Object.keys(this.getPaymentMethods.fetchMethods().netbanking).forEach(k => {
      this.issuerOptions.push({label: this.getPaymentMethods.fetchMethods().netbanking[k], value: k})
    });
  }

  fields: FormlyFieldConfig[] = [
    {
      
      fieldGroupClassName: "row",
      fieldGroup: [
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
    }]}
  ];


  public getConf(): object {
   let toReturnObj = {
    method : 'netbanking',
    banks:  this.model.issuers,
   // model:JSON.parse(JSON.stringify(this.model))
   };
  
   //Object.keys(toReturnObj).forEach(key => toReturnObj[key] === undefined && delete toReturnObj[key])
  
      return toReturnObj;
    }

}
