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
     
      ],
    },

  ];

}
