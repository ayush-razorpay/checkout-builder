import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { AbstractMainCheckout } from '../abstarct-main-checkout';

@Component({
  selector: 'app-additional-configs',
  templateUrl: './additional-configs.component.html',
  styleUrls: ['./additional-configs.component.css']
})
export class AdditionalConfigsComponent  extends AbstractMainCheckout  implements OnInit {

  ngOnInit(): void {
    this.form.valueChanges.subscribe(x => {
      this.updateModelToService(x)
  });
  }

  getJsob() {
    return this.model;
  }


  tnxTypes = [ 
  {label: 'Order Id  ', value : 'order_id'},
  {label: 'Subscription Id  ', value : 'subscription_id'},
  {label: 'Invoice Id  ', value : 'invoice_id'},
  {label: 'Payment Link Id  ', value : 'payment_link_id'}
];


  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          key: 'tnxType',
          type: 'select',
          templateOptions: {
            label: 'Transtion id type',
            options: this.tnxTypes
          },

        },
        {
          //handel this while returing the model
          className: 'col-6',
          type: 'input',
          key: 'tnx_id',
          templateOptions: {
            label: 'Enter Respective Id',
          },
          expressionProperties: {
            'hideExpression': '!model.tnxType',
          },
        },
     
      ],
    },

  ];


}
