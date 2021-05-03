import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { PaymentInstrument } from '../PaymentBlockModels';
import { v4 as uuidv4 } from "uuid";
import { PaymentBlocksService } from 'src/app/block-builder/service/payment-blocks.service';

@Component({
  selector: 'app-payment-block',
  templateUrl: './payment-block.component.html',
  styleUrls: ['./payment-block.component.css']
})
export class PaymentBlockComponent extends PaymentInstrument implements OnInit {


  @ViewChild('dynamicSubBlock') dynamicSubBlock: PaymentInstrument;

  constructor(paymentBlockService : PaymentBlocksService,) {
    super();
   }



  ngOnInit(): void {
  }

  @Input() name : string ;
  @Input() id : string ;

   paymentBlockList = new Array();


  addABlock(type) {
    this.paymentBlockList.push({ id: uuidv4(), type: type });
  }

  getBlockConf(){

  }

  public isCollapsed = false;

  removeBlock(){
   
  }

  getConfJsob(): object {
   return this.dynamicSubBlock.getConfJsob();

  }
}
