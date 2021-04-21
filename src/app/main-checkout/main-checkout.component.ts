import { QueryList, ViewChildren } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RzpCheckout } from '../model/RzpCheckout';
import { ToggelSwitchComponent } from '../toggel-switch/toggel-switch.component';

@Component({
  selector: 'app-main-checkout',
  templateUrl: './main-checkout.component.html',
  styleUrls: ['./main-checkout.component.css']
})
export class MainCheckoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let rzpCheckout : RzpCheckout;
    this.mainForm.valueChanges.subscribe(() => {

      rzpCheckout = this.mainForm.value;

      console.log(rzpCheckout);

    });

  }
  color = '#76988d';
  active = 1;

  @ViewChildren(ToggelSwitchComponent) private toogelSwitchList: QueryList<ToggelSwitchComponent>;
 
  model : RzpCheckout = new RzpCheckout();

  mainForm = new FormGroup({

    key : new FormControl(''),
    image : new FormControl(''),
    amount:new FormControl(''),
    currency : new FormControl(''),
    name: new FormControl(''),
    notes : new FormControl(''),
    entityType:new FormControl(''),
    entityId:new FormControl(''),
    color:new FormControl(''),
    callback_url:new FormControl(''),
    timeout:new FormControl(''),
    description:new FormControl(''),
    retry: new FormControl(''),
    nativeOtp:new FormControl(''),
    personalization:new FormControl(''),
    recurringPaytm:new FormControl(''),
    remeberCustomer:new FormControl(''),
  
  });

}
