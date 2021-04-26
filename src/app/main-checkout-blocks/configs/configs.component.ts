import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { AbstractMainCheckout } from '../abstarct-main-checkout';

@Component({
  selector: 'app-configs',
  templateUrl: './configs.component.html',
  styleUrls: ['./configs.component.css']
})
export class ConfigsComponent  extends AbstractMainCheckout  implements OnInit {
 



  ngOnInit(): void {
    this.form.valueChanges.subscribe(y => {
      let x = JSON.parse(JSON.stringify(y));

      if(x.enableTimeout == false)
      x.timeout = null;

      this.updateModelToService(x);
  });
  }

  

  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
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
