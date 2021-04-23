import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { GetMethodsService } from 'src/app/common/get-methods.service';

@Component({
  selector: 'app-card-block',
  templateUrl: './card-block.component.html',
  styleUrls: ['./card-block.component.css']
})
export class CardBlockComponent implements OnInit {

  constructor(private getPaymentMethods : GetMethodsService) { }


  networkOptions = new Array();
  issuerOptions = new Array();

  ngOnInit(): void {
    Object.keys(this.getPaymentMethods.fetchMethods().card_networks).forEach(k => {
     
      if(this.getPaymentMethods.fetchMethods().card_networks[k] != 0)
      {
     
      this.networkOptions.push({label: k, value: k})

      }
    });

    Object.keys(this.getPaymentMethods.fetchMethods().netbanking).forEach(k => {
      this.issuerOptions.push({label: k, value: k})

    });

  }

  form = new FormGroup({});
  model:any = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'Issuer',
      type: 'select',
      templateOptions: {
        label: 'Issuer',
        multiple: true,
        options: this.issuerOptions
        ,
      },
    },

    {
      key: 'Network',
      type: 'select',
      templateOptions: {
        label: 'Network',
        multiple: true,
        options: this.networkOptions
        ,
      },
    },
    {
      key: 'Type',
      type: 'select',
      templateOptions: {
        label: 'Type',
        multiple: true,
        options: [{label: 'DEBIT', value: 'debit'},{label: 'CREDIT', value: 'credit'}]
        ,
      },
    }
  ];

  onSubmit() {
    console.log(this.model);
  }
}
