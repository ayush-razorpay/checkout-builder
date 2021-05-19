import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
} from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFormOptions } from "@ngx-formly/core";
import { BlockBuilderServiceService } from "../block-builder/block-builder-service.service";

@Component({
  template: "",
})
export abstract class PaymentInstrument implements AfterViewInit {
  @Input() id: string;
  type: string;
  
  abstract getConf(): object;

  public getConfJsob(){
    let toReturnObj = JSON.parse(JSON.stringify(this.getConf()));
    toReturnObj.model =JSON.parse(JSON.stringify(this.model))
    Object.keys(toReturnObj).forEach(key => toReturnObj[key] === undefined && delete toReturnObj[key])
    return toReturnObj;
  }
  

  form = new FormGroup({});
  model: any = {};

  options: FormlyFormOptions = {
    formState: {
      disabled: true,
    },
  };
  constructor(
    private blockBuilderServiceService: BlockBuilderServiceService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    let toset = this.blockBuilderServiceService.getSubcomponentConfigUsingId(
      this.id
    );
    console.log(
      "called ######################################," + this.id,
      toset
    );
    if ((toset) && (toset.model)) {
      this.model = toset.model;
      this.cdRef.detectChanges();
    }
    this.form.valueChanges.subscribe((x) => {
      this.blockBuilderServiceService.updateSubcomponentChange(
        this.id,
        this.getConfJsob()
      );
    });
  }

  toggleDisabled() {
    this.options.formState.disabled = !this.options.formState.disabled;
  }
}
