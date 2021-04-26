import { Component, Directive, OnInit } from "@angular/core";
import { Form, FormGroup } from "@angular/forms";
import { MainCheckoutService } from "../main-checkout/main-checkout-service/main-checkout.service";


@Component({ template: '' })
export abstract class AbstractMainCheckout    {

constructor(private service : MainCheckoutService){   
}

updateModelToService(json:object){
    this.service.updateChange(json);
}

}
