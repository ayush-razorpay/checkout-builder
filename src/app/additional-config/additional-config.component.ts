import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFieldConfig, FormlyFormOptions } from "@ngx-formly/core";
import { debounceTime } from "rxjs/operators";
import { DemoServiceService } from "../checkout-demo/service/demo-service.service";
import { GetMethodsService } from "../data-services/get-methods.service";

@Component({
  selector: "app-additional-config",
  templateUrl: "./additional-config.component.html",
  styleUrls: ["./additional-config.component.css"],
})
export class AdditionalConfigComponent implements OnInit {
  base: any;

  constructor(
    private demoCheckoutService: DemoServiceService,
    private getMethodsService: GetMethodsService
  ) {}
  methods = [
    { label: "Card", value: "card" },
    { label: "Netbanking", value: "netbanking" },
    { label: "Cardless Emi", value: "cardless_emi" },
    { label: "UPI", value: "upi" },
    { label: "Wallet", value: "wallet" },
    { label: "Emi", value: "emi" },
    { label: "Paylater", value: "paylater" },
  ];

  ngOnInit(): void {
    this.form.valueChanges.pipe(debounceTime(3000)).subscribe((y) => {
      let a = this.getConfJsob(y);
      let z = JSON.parse(
        JSON.stringify(this.demoCheckoutService.getconfigcheckoutConfig())
      );
      this.model.defaultBlockEnabled = z["showDefaultBlock"];
      if (z["showDefaultBlock"] && y.hideMethod != null) {
        console.log(this.model);
        let hideList = this.hideJsob(y);
        this.demoCheckoutService.updateHide(hideList);
      }
      let result = Object.assign({}, z, a);
      this.demoCheckoutService.updateMainConfs(result);
    });
  }
  form = new FormGroup({});

  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: "row",
      fieldGroup: [
        {
          className: "col-6",
          type: "select",
          key: "method",
          templateOptions: {
            label: "Method",
            multiple: false,
            options: this.methods,
          },
          expressionProperties: {
            hideExpression: "!model.contact || !model.email",
          },
        },
        {
          className: "col-6",
          type: "select",
          key: "hideMethod",
          defaultValue: null,
          templateOptions: {
            label: "Hide Method",
            multiple: true,
            options: this.methods,
          },
          expressionProperties: {
            hideExpression: "!model.defaultBlockEnabled",
          },
        },
        {
          className: "col-6",
          key: "prefillAgree",
          type: "checkbox",
          defaultValue: false,
          templateOptions: {
            label: "Prefill",
            required: false,
          },
        },
        {
          className: "col-6",
          type: "input",
          key: "contact",
          templateOptions: {
            label: "Contact",
          },
          expressionProperties: {
            hideExpression: "!model.prefillAgree",
          },
        },
        {
          className: "col-6",
          type: "input",
          key: "email",
          templateOptions: {
            label: "Email",
          },
          expressionProperties: {
            hideExpression: "!model.prefillAgree",
          },
        },
      ],
    },
  ];
  public getConfJsob(ob): object {
    let toReturnObj = {};
    toReturnObj = {
      prefill: { contact: ob.contact, email: ob.email, method: ob.method },
    };
    return toReturnObj;
  }
  public hideJsob(ob): object {
    let toReturnObj1 = [];
    ob.hideMethod.forEach((element) => {
      toReturnObj1.push({ method: element });
    });
    return toReturnObj1;
  }
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
