import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
} from "@angular/core";
import { GetMethodsService } from "../common/get-methods.service";
import { CardBlockComponent } from "../payment-blocks/card-block/card-block.component";
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
      // config: {
        display: {
          blocks: {
            hdfc: {
              //nameforHDFCblockname: "Pay using HDFC Bank",
              instruments: temp
            },
            other: {
              //nameforotherblockname: "Other Payment modes",
              instruments: [
                {
                  method: "card",
                  issuers: [
                    "ICIC"
                  ]
                },
                {
                  method: 'netbanking',
                  
                }
              ]
            }
          },
          hide: [
            {
              method: "upi"
            }
          ],
          sequence: [
            "block.hdfc",
            "block.other"
          ],
          preferences: {
            show_default_blocks: false//ShouldCheckoutshowitsdefaultblocks?
          }
        }
      // }
    };
    this.updateDemo(var1);
    console.log("-----------------------------", var1);
  }

  updateDemo(obj) {
   

    this.demoService.updateDemoComponentConfig(obj);
  }
}
