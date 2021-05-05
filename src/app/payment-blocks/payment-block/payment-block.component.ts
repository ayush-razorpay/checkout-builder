import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { v4 as uuidv4 } from "uuid";
import { PaymentBlocksService } from 'src/app/block-builder/service/payment-blocks.service';
import { PaymentBlock, PaymentInstrument } from '../PaymentBlockModels';
@Component({
  selector: 'app-payment-block',
  templateUrl: './payment-block.component.html',
  styleUrls: ['./payment-block.component.css']
})
export class PaymentBlockComponent extends PaymentInstrument implements OnInit {


  @ViewChild('dynamicSubBlock') dynamicSubBlock: PaymentInstrument;

  constructor(public paymentBlockService : PaymentBlocksService,) {
    super();
   }



  ngOnInit(): void {
  }

  @Input() name : string ;
  @Input() id : string ;

  

  addABlock(type) {
    this.paymentBlockService.paymentBlocks.push(new PaymentBlock(this.id,uuidv4(),type ) );
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
