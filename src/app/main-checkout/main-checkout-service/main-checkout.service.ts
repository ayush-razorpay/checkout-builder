import { Injectable } from '@angular/core';
import { DemoServiceService } from 'src/app/checkout-demo/service/demo-service.service';

@Injectable({
  providedIn: 'root'
})
export class MainCheckoutService {

  constructor(private checkoutDemoService : DemoServiceService) { }

  mainModel:any;

  patchMode(json:object):void{

    console.log('injected method called',json);
    this.mainModel = {... this.mainModel, ...json};
    this.checkoutDemoService.updateDemoComponent(this.mainModel);

  }


  getModel()
  {
    return this.mainModel;
  }

}
