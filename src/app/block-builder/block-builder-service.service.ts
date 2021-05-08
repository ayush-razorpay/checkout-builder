import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlockBuilderServiceService {

  constructor() { }


  public instrumentsConfigList = new Array();

  updateOnChnage(id:string,conf:object) : void {

  console.log("------------on chnage event------------");
  let index : number;


  for (let i = 0; i < this.paymentBlockList.length; i++) {
    if (this.paymentBlockList[i].id == id){
      index = i ;
      break;
    }
}


 console.log("index - ", index,conf);


}

  public paymentBlockList = new Array();

  public removeBlock(id):void{
    this.paymentBlockList =  this.paymentBlockList.filter(x=> x.id != id);
  }


}
