import { Injectable } from '@angular/core';
import { DemoServiceService } from 'src/app/checkout-demo/service/demo-service.service';

@Injectable({
  providedIn: 'root'
})
export class MainCheckoutService {

  constructor(private checkoutDemoService : DemoServiceService) { }

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


}
