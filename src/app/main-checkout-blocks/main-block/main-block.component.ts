import { Component, Input, OnInit, ViewChild } from '@angular/core';
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

  @ViewChild('dynamicSubBlock') dynamicSubBlock: PaymentBlockInterface;

  @Input() type : string ;
  @Input() id : string ;

  public isCollapsed = false;

  getConfJsob(): object {
    return this.dynamicSubBlock.getConfJsob();
 
   }
}
