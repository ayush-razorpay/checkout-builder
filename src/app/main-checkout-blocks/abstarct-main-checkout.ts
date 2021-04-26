import { Component, Directive, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MainCheckoutService } from "../main-checkout/main-checkout-service/main-checkout.service";


@Component({ template: '' })
export abstract class AbstractMainCheckout    {

constructor(private service : MainCheckoutService){

}


updateModelToService(json:object){
    this.service.patchMode(json);
}
  

    




 }