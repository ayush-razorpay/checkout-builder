import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { BlockBuilderServiceService } from 'src/app/block-builder/block-builder-service.service';
import { PaymentInstrument } from '../PaymentBlockModels';


@Component({
  selector: 'app-payment-block',
  templateUrl: './payment-block.component.html',
  styleUrls: ['./payment-block.component.css']
})
export class PaymentBlockComponent extends PaymentInstrument implements OnInit {


  @ViewChild('dynamicSubBlock') dynamicSubBlock: PaymentInstrument;

  constructor(private blockBuilderService:BlockBuilderServiceService) {
    super();
   }



  ngOnInit(): void {
  }

  @Input() type : string ;
  @Input() id : string ;


  addABlock(var1){

  }

  getBlockConf(){

  }

  public isCollapsed = false;

  removeBlock(){
    this.blockBuilderService.removeBlock(this.id);
  }

  getConfJsob(): object {
   return this.dynamicSubBlock.getConfJsob();

  }
}
