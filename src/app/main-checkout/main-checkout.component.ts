import { QueryList, ViewChildren } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DemoServiceService } from '../checkout-demo/service/demo-service.service';
import { CheckoutModelTheme } from '../model/CheckoutModalTheme';
import { RzpCheckout } from '../model/RzpCheckout';
import { PaymentBlockComponent } from '../payment-blocks/payment-block/payment-block.component';
import { PaymentBlockInterface } from '../payment-blocks/PaymentBlocksInterface';
import { ToggelSwitchComponent } from '../toggel-switch/toggel-switch.component';


@Component({
  selector: 'app-main-checkout',
  templateUrl: './main-checkout.component.html',
  styleUrls: ['./main-checkout.component.css']
})
export class MainCheckoutComponent implements OnInit {

  constructor(private demoServiceService:DemoServiceService) { }
 
  dynamicSubBlock: PaymentBlockInterface;
  type: string;
  id: string;
  public isCollapsed: boolean;
 

  entityType : string;

  ngOnInit(): void {

    let rzpCheckout : RzpCheckout;
    this.mainForm.valueChanges.subscribe(() => {

      rzpCheckout = this.mainForm.value;

      this.entityType=rzpCheckout.entityType;

      let x : CheckoutModelTheme = new CheckoutModelTheme() ;

      x.color=rzpCheckout.color;

      

      rzpCheckout.theme=x;
      console.log(rzpCheckout);
      if(rzpCheckout != null)
      {
     
       let var1= RzpCheckout.pack(rzpCheckout);
      this.demoServiceService.updateDemoComponent(var1);

      }
    });

  }
  color = '#76988d';
  active = 1;

  @ViewChildren(ToggelSwitchComponent) private toogelSwitchList: QueryList<ToggelSwitchComponent>;
 
  model : RzpCheckout = new RzpCheckout();

  mainForm = new FormGroup({

    key : new FormControl('rzp_test_oJPbj9rC1rDGAQ'),
    image : new FormControl('https://s24402.pcdn.co/wp-content/uploads/2020/03/Razorpay.jpg'),
    amount:new FormControl('100'),
    currency : new FormControl('INR'),
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
