import { Component, Input, OnInit } from '@angular/core';
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
  @Input() id : string ;
  constructor(private getPaymentMethods : GetMethodsService,
    private blockBuilderServiceService : BlockBuilderServiceService) {
    super();
    this.form.valueChanges.subscribe(x=>{
      this.blockBuilderServiceService.updateSubcomponentChange(this.id,this.getConfJsob());
    })
  }
  paylaterOptions=new Array();
  ngOnInit(): void {
    Object.keys(this.getPaymentMethods.fetchMethods().paylater).forEach(k => {
      this.paylaterOptions.push({label: k, value: k})  
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


  toggleDisabled() {
    this.options.formState.disabled = !this.options.formState.disabled;
  }

  public getConfJsob(): object {
  
   let toReturnObj = {
    method : 'paylater',
    providers:  this.model.paylater,
   };
  
   Object.keys(toReturnObj).forEach(key => toReturnObj[key] === undefined && delete toReturnObj[key])
  
      return toReturnObj;
    }
}
