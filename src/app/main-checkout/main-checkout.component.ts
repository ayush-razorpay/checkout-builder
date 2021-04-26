import { QueryList, ViewChildren } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DemoServiceService } from '../checkout-demo/service/demo-service.service';
import { AbstractMainCheckout } from '../main-checkout-blocks/abstarct-main-checkout';
import { PaymentBlockInterface } from '../payment-blocks/PaymentBlocksInterface';
import { MainCheckoutService } from './main-checkout-service/main-checkout.service';


@Component({
  selector: 'app-main-checkout',
  templateUrl: './main-checkout.component.html',
  styleUrls: ['./main-checkout.component.css']
})
export class MainCheckoutComponent implements OnInit {

  constructor(private service:MainCheckoutService) { }
  
  ngOnInit(): void {
  
  }

 
}
