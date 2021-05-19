import { Injectable } from "@angular/core";
import { DemoServiceService } from "../checkout-demo/service/demo-service.service";

@Injectable({
  providedIn: "root",
})
export class BlockBuilderServiceService {
  constructor(private demoCheckoutService: DemoServiceService) {}



   paymentsConfigList = new Array();

  public removeBlock(id): void {
    this.paymentsConfigList = this.paymentsConfigList.filter((x) => x.id != id);
  }

  public updateSubcomponentChange(id, conf) {
    console.log("to update config ----", conf);

    let index;
    for (let i = 0; i < this.paymentsConfigList.length; i++) {
      if (this.paymentsConfigList[i].id == id) {
        index = i;
        break;
      }
    }
    
    this.paymentsConfigList[index].config = conf;

    this.publishToDemoService();
  }

  public publishToDemoService(){
    let confArray = new Array();
    let toUpdate = JSON.parse(JSON.stringify(this.paymentsConfigList));
    toUpdate.forEach((t) => {
      let temp = JSON.parse(JSON.stringify(t.config));
      delete temp['model']
      confArray.push(temp);
    });

    this.demoCheckoutService.updateConfigBlockList(confArray);
  }

  public getSubcomponentConfigUsingId(id) {
    let index;
    for (let i = 0; i <= this.paymentsConfigList.length; i++) {
      if (this.paymentsConfigList[i].id == id) {
        index = i;
        break;
      }
    }

    console.log(
      "-------",
      id,
      "-----index - ",
      index,
      "-------",
      this.paymentsConfigList
    );
    if (index != undefined) return this.paymentsConfigList[index].config;
    else return null;
  }
}
