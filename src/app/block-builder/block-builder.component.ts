import {
  Component,
  OnInit,
  QueryList,
  ViewChildren,
} from "@angular/core";
import { PaymentBlockComponent } from "../payment-blocks/payment-block/payment-block.component";
import { v4 as uuidv4 } from "uuid";
import { BlockBuilderServiceService } from "./block-builder-service.service";
import { DemoServiceService } from "../checkout-demo/service/demo-service.service";
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: "app-block-builder",
  templateUrl: "./block-builder.component.html",
  styleUrls: ["./block-builder.component.css"],
})
export class BlockBuilderComponent implements OnInit {
  @ViewChildren("dynamicInsert")
  dynamicInsert: QueryList<PaymentBlockComponent>;

  constructor(
    public service: BlockBuilderServiceService,
    private demoService: DemoServiceService
  ) {}


  readonly maxLength = 4;

  ngOnInit(): void {}

  addABlock(type) {
    console.log("method called");

    this.service.paymentBlockList.push({ id: uuidv4(), type: type });
  }
  model = {
    'Block 1': true,
    // middle: false,
    // right: false
  };

  getBlockConf() {
    let temp = new Array();
    

    this.dynamicInsert.toArray().forEach((x) => temp.push(x.getConfJsob()));

    let var1 = {

        display: {
          blocks: {
            block1: {
              name: "Ayush",
              instruments: temp
            },

          },
          sequence: [
             "block.block1",
            // "block.other"
          ],
          preferences: {
            show_default_blocks: false
          }
        }
    };
    this.updateDemo(var1);
    console.log("-----------------------------", var1);
  }

  updateDemo(obj) {
    this.demoService.updateDemoComponentConfig(obj);
  }


  // drop(event: CdkDragDrop<string[]>) {
  //   moveItemInArray(this.service.paymentBlockList, event.previousIndex, event.currentIndex);
  // }

  paymentBlocks :Array<PaymentBlocks> = [
    {name:'Block 1',id:"1",status: true}
  ];

  drop1(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.paymentBlocks, event.previousIndex, event.currentIndex);
  }


  addPaymentBlock(){

    if(this.paymentBlocks.length >= this.maxLength ){
    alert("Cannot add more payment blocks")

    return;

    }

    let id = (this.paymentBlocks.length+1).toString();
    let name = 'Block '+ id ;
    this.paymentBlocks.push(

      {name:name,id:id,status: true}
      );


      // Object.keys( this.model).forEach(x=> this.model[x]=false);
      // this.model[name]=true;

      this.selectBlockToEdit(id);

  }

  selectBlockToEdit(index){
   this.paymentBlocks.forEach(x=>x.status = false);
   this.paymentBlocks[index-1].status=true;
  }

  
  
}

export class PaymentBlocks {
 name:string;
 id:string;
 status:boolean;
}
