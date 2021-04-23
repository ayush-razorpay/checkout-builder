import { Component, ComponentFactoryResolver, OnInit, QueryList, ViewChild, ViewContainerRef } from '@angular/core';
import { GetMethodsService } from '../common/get-methods.service';
import { CardBlockComponent } from '../payment-blocks/card-block/card-block.component';
import { PaymentBlockComponent } from '../payment-blocks/payment-block/payment-block.component';
import {v4 as uuidv4} from 'uuid';
import { BlockBuilderServiceService } from './block-builder-service.service';

@Component({
  selector: 'app-block-builder',
  templateUrl: './block-builder.component.html',
  styleUrls: ['./block-builder.component.css']
})
export class BlockBuilderComponent implements OnInit {
  @ViewChild('dynamicInsert') dynamicInsert: QueryList<PaymentBlockComponent>;

  constructor(public service : BlockBuilderServiceService) { }




  ngOnInit(): void {
    
  }

  addABlock(type){
    console.log("method called");
  
    this.service.paymentBlockList.push({id:uuidv4(),type:type});
  }

  
}


