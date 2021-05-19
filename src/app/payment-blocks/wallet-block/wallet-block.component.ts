import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { FormlyFieldConfig } from "@ngx-formly/core";
import { BlockBuilderServiceService } from "src/app/block-builder/block-builder-service.service";
import { GetMethodsService } from "src/app/data-services/get-methods.service";
import { PaymentInstrument } from "../PaymentBlockModels";

@Component({
  selector: "app-wallet-block",
  templateUrl: "./wallet-block.component.html",
  styleUrls: ["./wallet-block.component.css"],
})
export class WalletBlockComponent extends PaymentInstrument implements OnInit {
  constructor(
    private getPaymentMethods: GetMethodsService,
    cdRef: ChangeDetectorRef,
    blockBuilderServiceService: BlockBuilderServiceService
  ) {
    super(blockBuilderServiceService, cdRef);
  }

  walletOptions = new Array();
  ngOnInit(): void {
    Object.keys(this.getPaymentMethods.fetchMethods().wallet).forEach((k) => {
      this.walletOptions.push({ label: k, value: k });
    });
  }

  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: "row",
      fieldGroup: [
        {
          key: "walletAgree",
          type: "checkbox",
          defaultValue: true,
          templateOptions: {
            label: "All Wallets Enabled",
            required: true,
          },
        },
        {
          className: "col-11",
          key: "wallets",
          type: "select",
          templateOptions: {
            label: "Wallets",
            multiple: true,
            options: this.walletOptions,
          },
          expressionProperties: {
            "templateOptions.disabled": "model.walletAgree",
          },
        },
      ],
    },
  ];

  public getConf(): object {
    let toReturnObj = {
      method: "wallet",
      wallets: this.model.wallets,
   //   model: JSON.parse(JSON.stringify(this.model)),
    };

    // Object.keys(toReturnObj).forEach(
    //   (key) => toReturnObj[key] === undefined && delete toReturnObj[key]
    // );

    return toReturnObj;
  }
}
