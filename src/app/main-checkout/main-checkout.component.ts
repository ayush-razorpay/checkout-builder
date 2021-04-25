import { QueryList, ViewChildren } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DemoServiceService } from '../checkout-demo/service/demo-service.service';
import { PaymentBlockInterface } from '../payment-blocks/PaymentBlocksInterface';


@Component({
  selector: 'app-main-checkout',
  templateUrl: './main-checkout.component.html',
  styleUrls: ['./main-checkout.component.css']
})
export class MainCheckoutComponent implements OnInit {

  constructor(private demoServiceService:DemoServiceService) { }
  
  ngOnInit(): void {
  
  }
 
  dynamicSubBlock: PaymentBlockInterface;
 
  mainForm = new FormGroup({

   // key : new FormControl('rzp_test_oJPbj9rC1rDGAQ'),
   // image : new FormControl('https://s24402.pcdn.co/wp-content/uploads/2020/03/Razorpay.jpg'),
    //amount:new FormControl('100'),
   // currency : new FormControl('INR'),
    //name: new FormControl(''),
    //notes : new FormControl(''),
   
    entityType:new FormControl(''),
    entityId:new FormControl(''),
   
    //color:new FormControl(''),
   
    callback_url:new FormControl(''),
   
   // timeout:new FormControl(''),
   // description:new FormControl(''),
   
    //retry: new FormControl(''),
   
    // nativeOtp:new FormControl(''),
    // personalization:new FormControl(''),
    // recurringPaytm:new FormControl(''),
    // remeberCustomer:new FormControl(''),
  
  });




}
