import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MainCheckoutService } from 'src/app/main-checkout/main-checkout-service/main-checkout.service';
import { PaymentBlockInterface } from 'src/app/payment-blocks/PaymentBlocksInterface';

@Component({
  selector: 'app-main-block',
  templateUrl: './main-block.component.html',
  styleUrls: ['./main-block.component.css']
})
export class MainBlockComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  @Input() type : string ;
  @Input() id : string ;
  @Input() service : MainCheckoutService;

  public isCollapsed = false;



  public collapse(){
     this.isCollapsed=true;
   }
  
}

