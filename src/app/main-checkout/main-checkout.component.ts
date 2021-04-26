import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { DemoServiceService } from '../checkout-demo/service/demo-service.service';


@Component({
  selector: 'app-main-checkout',
  templateUrl: './main-checkout.component.html',
  styleUrls: ['./main-checkout.component.css']
})
export class MainCheckoutComponent implements OnInit {

   txnIdType = '';

  tnxTypes = [ 
    {label: 'Order Id  ', value : 'order_id',id:1},
    {label: 'Subscription Id  ', value : 'subscription_id',id:2},
    {label: 'Invoice Id  ', value : 'invoice_id',id:3},
    {label: 'Payment Link Id  ', value : 'payment_link_id',id:4}
  ];

  constructor(private demoCheckoutService : DemoServiceService) { }
  
  ngOnInit(): void {
  
    this.form.valueChanges.subscribe(x=>this.demoCheckoutService.updateDemoComponent(x));

  }
  form = new FormGroup({});
  model: any = {'tnxType':'order_id'};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-6',
          type: 'input',
          key: 'key',
          defaultValue:'rzp_test_oJPbj9rC1rDGAQ',
          templateOptions: {
            label: 'key',
            required: true,
          },
        },
        {
          className: 'col-6',
          type: 'input',
          key: 'currency',
          defaultValue:'INR',
          templateOptions: {
            label: 'currency',
            required: true,
            
          }
        },
        {
          className: 'col-6',
          type: 'input',
          key: 'image',
         templateOptions: {
            label: 'Checkout Brand logo',
          },
        },
        {
          className: 'col-6',
          type: 'input',
          key: 'name',
          templateOptions: {
            label: 'name',
          }
        },
        {
          className: 'col-6',
          type: 'input',
          key: 'color',
          templateOptions: {
            label: 'Checkout Theme Color',
          }
        },
        {
          className: 'col-6',
          type: 'input',
          key: 'description',
          templateOptions: {
            label: 'description',
          }
        },
        {
          className: 'col-6',
          type: 'input',
          key: 'amount',
          defaultValue:100,
          templateOptions: {
            label: 'amount (1 INR = 100 )',
            required:true,
            type: 'number',
            min: 100,
          }
        },
        {
          className: 'col-6',
          type: 'input',
          key: 'notes',
          templateOptions: {
            label: 'notes',
          }
        },

        {
          className: 'col-6',
          key: 'tnxType',
          type: 'select',
          templateOptions: {
            label: 'Transtion id type',
            options: this.tnxTypes,
            valueProp: o => o.value,
            compareWith: (o1, o2) => o1 === o2,
          },

        },
        {
          //handel this while returing the model
          className: 'col-6',
          type: 'input',
          key: 'tnx_id',
          templateOptions: {
            label: this.txnIdType,
            
          },
          expressionProperties: {
            'templateOptions.label': 'model.tnxType',
            'hideExpression': '(!model.tnxType)',
          },
          
        },

        {
          className: 'col-6',
          key: 'retry',
          type: 'checkbox',
          defaultValue:true,
          templateOptions: {
            label: 'Retry Enabled',
          },
        },
        {
          className: 'col-6',
          type: 'input',
          key: 'max_count',
          defaultValue:'3',
          templateOptions: {
            label: 'Max retry attempt count',
            type: 'number',
            
          },
          expressionProperties: {
            'hideExpression': '!model.retry',
          },
        },
        {
          className: 'col-6',
          key: 'enableTimeout',
          type: 'checkbox',
          defaultValue:false,
          templateOptions: {
            label: 'Timeout Enabled',
          },
        },
        {
          className: 'col-6',
          type: 'input',
          key: 'timeout',
           defaultValue:60,
          templateOptions: {
            label: 'Timeout in seconds',
            type: 'number',
          },
          expressionProperties: {
            'hideExpression': '!model.enableTimeout',
          },
        },
      ],
    },

  ];

 
}
