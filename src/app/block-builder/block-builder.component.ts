import { Component, OnInit, QueryList, ViewChildren } from "@angular/core";
import { PaymentBlockComponent } from "../payment-blocks/payment-block/payment-block.component";
import { v4 as uuidv4 } from "uuid";
import { DemoServiceService } from "../checkout-demo/service/demo-service.service";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";


@Component({
  selector: "app-block-builder",
  templateUrl: "./block-builder.component.html",
  styleUrls: ["./block-builder.component.css"],
})
export class BlockBuilderComponent implements OnInit {
  @ViewChildren("dynamicInsert")
  dynamicInsert: QueryList<PaymentBlockComponent>;


  currentlyEditing ;

  constructor(
    private demoService: DemoServiceService
  ) {}

  readonly maxLength = 4;

  ngOnInit(): void {

    let uid = uuidv4();

    this.paymentBlocks.push( { name: "Block", id: uid , status: true });

    this.currentlyEditing = uid;

  }

  paymentBlocks: Array<PaymentBlocks> = [];




  getBlockConf() {
    let temp = new Array();

    this.dynamicInsert.toArray().forEach((x) => temp.push(x.getConfJsob()));

    let var1 = {
      display: {
        blocks: {
          block1: {
            name: "Ayush",
            instruments: temp,
          },
        },
        sequence: [
          "block.block1",
          // "block.other"
        ],
        preferences: {
          show_default_blocks: false,
        },
      },
    };
    this.updateDemo(var1);
  }

  updateDemo(obj) {
    this.demoService.updateDemoComponentConfig(obj);
  }

  // drop(event: CdkDragDrop<string[]>) {
  //   moveItemInArray(this.service.paymentBlockList, event.previousIndex, event.currentIndex);
  // }

 

  drop1(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.paymentBlocks,
      event.previousIndex,
      event.currentIndex
    );
  }

  addPaymentBlock() {
    if (this.paymentBlocks.length >= this.maxLength) {
      alert("Cannot add more payment blocks");
      return;
    }
    let id = uuidv4();
    let name = "Block ";
    this.paymentBlocks.push({ name: name, id: id, status: true });
    this.selectBlockToEdit(id);
  }

  selectBlockToEdit(id) {
    this.paymentBlocks.forEach((x) => {
      if (x.id != id) {
        x.status = false;
      }
      else { 
        x.status =  true;
      
        this.currentlyEditing = x.id;
      }
    });
  }



}

export class PaymentBlocks {
  name: string;
  id: string;
  status: boolean;
}
