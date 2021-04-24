import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-credentials',
  templateUrl: './credentials.component.html',
  styleUrls: ['./credentials.component.css']
})
export class CredentialsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          type: 'input',
          key: 'firstName',
          templateOptions: {
            label: 'First Name',
          },
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'lastName',
          templateOptions: {
            label: 'Last Name',
          },
          expressionProperties: {
            'templateOptions.disabled': '!model.firstName',
          },
        },
      ],
    },
    {
      template: '<hr /><div><strong>Address:</strong></div>',
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-2',
          type: 'input',
          key: 'street',
          templateOptions: {
            label: 'Street',
          },
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'cityName',
          templateOptions: {
            label: 'City',
          },
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'zip',
          templateOptions: {
            type: 'number',
            label: 'Zip',
            max: 99999,
            min: 0,
            pattern: '\\d{5}',
          },
        },
      ],
    },

  ];

}
