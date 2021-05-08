import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BlockBuilderServiceService {

  constructor() { }





  public paymentBlockList = new Array();

  public removeBlock(id):void{
    this.paymentBlockList =  this.paymentBlockList.filter(x=> x.id != id);
  }





}

