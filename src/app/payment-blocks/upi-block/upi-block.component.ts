import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { FormlyFieldConfig } from "@ngx-formly/core";
import { BlockBuilderServiceService } from "src/app/block-builder/block-builder-service.service";
import { GetMethodsService } from "src/app/data-services/get-methods.service";
import { PaymentInstrument } from "../PaymentBlockModels";

@Component({
  selector: "app-upi-block",
  templateUrl: "./upi-block.component.html",
  styleUrls: ["./upi-block.component.css"],
})
export class UpiBlockComponent extends PaymentInstrument implements OnInit {
  constructor(
    private getPaymentMethods: GetMethodsService,
    cdRef: ChangeDetectorRef,
    blockBuilderServiceService: BlockBuilderServiceService
  ) {
    super(blockBuilderServiceService, cdRef);
  }

  upiFlows = new Array(
    { label: "Collect", value: "collect" },
    { label: "UPI-QR", value: "qr" }
  );
  ngOnInit(): void {}

  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: "row",
      fieldGroup: [
        {
          className: "col-11",
          key: "flows",
          type: "select",
          templateOptions: {
            label: "Flows",
            multiple: true,
            options: this.upiFlows,
          },
        },
      ],
    },
  ];

  public getConf(): object {
    let toReturnObj = {
      method: "upi",
      flows: this.model.flows,
   //   model: JSON.parse(JSON.stringify(this.model)),
    };

    // Object.keys(toReturnObj).forEach(
    //   (key) => toReturnObj[key] === undefined && delete toReturnObj[key]
    // );

    return toReturnObj;
  }
}
