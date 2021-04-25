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

  ngOnInit(): void {}

  addABlock(type) {
    console.log("method called");

    this.service.paymentBlockList.push({ id: uuidv4(), type: type });
  }

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
}
