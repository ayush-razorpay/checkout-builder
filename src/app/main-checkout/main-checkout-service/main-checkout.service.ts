import { Injectable, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DemoServiceService } from 'src/app/checkout-demo/service/demo-service.service';
import { AbstractMainCheckout } from 'src/app/main-checkout-blocks/abstarct-main-checkout';

@Injectable({
  providedIn: 'root'
})
export class MainCheckoutService implements OnInit{


  constructor(private checkoutDemoService : DemoServiceService) { }
  
  ngOnInit(): void {
  }

  mainModel:object = {};


  patchMode(json:object):void{
    this.mainModel = {... this.mainModel, ...json};

    this.checkoutDemoService.updateDemoComponent(this.mainModel);
    
    Object.keys(this.mainModel).forEach(x=>{

      if(this.mainModel[x] == null || this.mainModel[x] == undefined || this.mainModel[x] == '' )

     delete this.mainModel[x];

    });
  }

  updateChange(json:object){

    if(json != null)
    {

    Object.keys(json).forEach(x=> delete this.mainModel[x] );
    this.patchMode(json);
    }
  }


  expandUpdate(id){

  }


}
