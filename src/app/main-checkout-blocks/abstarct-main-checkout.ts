import { Component, Directive, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MainCheckoutService } from "../main-checkout/main-checkout-service/main-checkout.service";


@Component({ template: '' })
export abstract class AbstractMailCheckout    {

constructor(private service : MainCheckoutService){

}


updateModelToService(x){

    console.log('lets back update',x);

    this.service.patchMode(x);
}
  

    




 }