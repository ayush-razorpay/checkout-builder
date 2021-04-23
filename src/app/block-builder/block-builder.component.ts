import { Component, ComponentFactoryResolver, OnInit, QueryList, ViewChild, ViewContainerRef } from '@angular/core';
import { GetMethodsService } from '../common/get-methods.service';
import { CardBlockComponent } from '../payment-blocks/card-block/card-block.component';
import { PaymentBlockComponent } from '../payment-blocks/payment-block/payment-block.component';

@Component({
  selector: 'app-block-builder',
  templateUrl: './block-builder.component.html',
  styleUrls: ['./block-builder.component.css']
})
export class BlockBuilderComponent implements OnInit {
  @ViewChild('dynamicInsert') dynamicInsert: QueryList<PaymentBlockComponent>;

  constructor(private methodsService : GetMethodsService) { }


  paymentBlockList = new Array();

  ngOnInit(): void {

    console.log(this.methodsService.fetchMethods());
    
  }

  addABlock(type){
    console.log("method called");
  
    this.paymentBlockList.push(type);


  }

  
}


