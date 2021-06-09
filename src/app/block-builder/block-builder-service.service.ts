import { Injectable } from "@angular/core";
import { DemoServiceService } from "../checkout-demo/service/demo-service.service";

@Injectable({
  providedIn: "root",
})
export class BlockBuilderServiceService {
  constructor(private demoCheckoutService: DemoServiceService) {}

  public paymentBlockList = new Array();

  private paymentsConfigList = new Array();

  public removeBlock(id): void {
    this.paymentBlockList = this.paymentBlockList.filter((x) => x.id != id);
  }

  public updateSubcomponentChange(id, conf) {
    let index;
    for (let i = 0; i < this.paymentBlockList.length; i++) {
      if (this.paymentBlockList[i].id == id) {
        index = i;
        break;
      }
    }
      this.paymentsConfigList[index] = conf;

    

      let var1 = {
        display: {
          blocks: {
            block1: {
              name: "Payment Methods",
              instruments: this.paymentsConfigList,
            },
          },
          sequence: [
            "block.block1",
          ],
          preferences: {
            show_default_blocks: false,
          },
        },
      };
    
    console.log("change for id : ", id, "index - ", index);
    this.demoCheckoutService.updateDemoComponentConfig(var1);
  }
}
