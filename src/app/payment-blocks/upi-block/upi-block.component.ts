import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { BlockBuilderServiceService } from 'src/app/block-builder/block-builder-service.service';
import {  PaymentInstrument } from '../PaymentBlockModels';

@Component({
  selector: 'app-upi-block',
  templateUrl: './upi-block.component.html',
  styleUrls: ['./upi-block.component.css']
})
export class UpiBlockComponent extends PaymentInstrument implements OnInit {
  constructor(private blockBuilderServiceService : BlockBuilderServiceService) { 
    super();
    this.form.valueChanges.subscribe(x=>{
      this.blockBuilderServiceService.updateSubcomponentChange(this.id,this.getConfJsob());
    })
  }
  @Input() id : string ;
  upiFlows = new Array({label:"Collect",value:"collect"},{label:"UPI-QR",value:"qr"});
  ngOnInit(): void {
  }
  options: FormlyFormOptions = {
    formState: {
      disabled: true,
    },
  };

  form= new FormGroup({});
  model:any = {};
  fields: FormlyFieldConfig[] = [
    {
      
        fieldGroupClassName: "row",
        fieldGroup: [
  
    {
      className: 'col-11',
      key: 'flows',
      type: 'select',
      templateOptions: {
        label: 'Flows',
        multiple: true,
        options: this.upiFlows
      }
      
    }
        ]}
  ];


  public getConfJsob(): object {
    let toReturnObj = {
      method : 'upi',
      flows:  this.model.flows,
     };
    
     Object.keys(toReturnObj).forEach(key => toReturnObj[key] === undefined && delete toReturnObj[key])
    
        return toReturnObj;
    
  }
  
      }
      
  
  

