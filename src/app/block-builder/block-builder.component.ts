import { Component, OnInit, QueryList, ViewChildren } from "@angular/core";
import { PaymentBlockComponent } from "../payment-blocks/payment-block/payment-block.component";
import { v4 as uuidv4 } from "uuid";
import { DemoServiceService } from "../checkout-demo/service/demo-service.service";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { PaymentBlocksService } from "./service/payment-blocks.service";
import { PaymentBlock } from "../payment-blocks/PaymentBlockModels";

@Component({
  selector: "app-block-builder",
  templateUrl: "./block-builder.component.html",
  styleUrls: ["./block-builder.component.css"],
})
export class BlockBuilderComponent implements OnInit {
  @ViewChildren("dynamicInsert")
  dynamicInsert: QueryList<PaymentBlockComponent>;

  currentlyEditing;

  constructor(public blocksService: PaymentBlocksService) {}

  readonly maxLength = 4;

  ngOnInit(): void {
    let uid = uuidv4();
    this.blocksService.paymentBlocks.push(new PaymentBlock("Block", uid, true));
    this.currentlyEditing = uid;
  }

  drop1(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.blocksService.paymentBlocks,
      event.previousIndex,
      event.currentIndex
    );
  }

  addPaymentBlock() {
    if (this.blocksService.paymentBlocks.length >= this.maxLength) {
      alert("Cannot add more payment blocks");
      return;
    }
    let id = uuidv4();
    let name = "Block ";
    this.blocksService.paymentBlocks.push(new PaymentBlock(name, id, true));
    this.selectBlockToEdit(id);
  }

  selectBlockToEdit(id) {
    this.blocksService.paymentBlocks.forEach((x) => {
      if (x.id != id) {
        x.status = false;
      } else {
        x.status = true;
        this.currentlyEditing = x.id;
      }
    });
  }
  
}
