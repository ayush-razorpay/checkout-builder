
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DemoServiceService {

  getconfigcheckoutConfig(): any {

    let toReturn = JSON.parse(JSON.stringify(this.checkoutConfig));
    toReturn.config = this.config;
    
    if(this.theme.color == undefined) {this.theme.color =this.getRandomColor() ; }

    toReturn.theme = this.theme;

    return toReturn;
  }
  

  show_default_blocksStatus = true;
  checkoutConfig  = {
    key: "rzp_live_uq7S4xKWHoMLLt", // Enter the Key ID generated from the Dashboard
    amount: "100",
    currency: "INR",
    tnxType: "order_id",
    

  };

  config = {
      display: {
        blocks: {
          block1: {
            name: "Payment Methods",
            instruments: [
            //  { method: "card" }
          ],
          },
        },
        hide: [
          // {
          // method: "upi"
          // }
        ],
        sequence: ["block.block1"],
        preferences: {
          show_default_blocks: this.show_default_blocksStatus, // Should Checkout show its default blocks?
        },
      },
    
  };

  prefill = {
      email: "gaurav.kumar@example.com",
      contact: +919900000000,
  };
  
  theme :  any = {} ;


  public urlChangeSubject: Subject<string> = new Subject<string>();

  getValue(): Observable<string> {
    return this.urlChangeSubject.asObservable();
  }

  setValue(newValue): void {
    this.urlChangeSubject.next(newValue);
  }

  public checkoutUrl: string = "https://www.razorpay.com";

  constructor() {}


  updateMainConfs(obj) {
    this.checkoutConfig =obj;
    this.updateUrl();
  }

  updateTheme(obj){
    this.theme = obj;
    this.updateUrl();
  }

  updateConfigBlockList(list){
    this.config.display.blocks.block1.instruments = list;
    this.updateUrl();
  }

  updateShow_default_blocksStatus(status:boolean){
    this.show_default_blocksStatus=status;
    this.updateUrl();
  }
  updateHide(list){
    this.config.display.hide=list;
    this.updateUrl();
  }


  updateUrl(){
    let var1 = JSON.parse(JSON.stringify(this.checkoutConfig)) ;
    let conf = JSON.parse(JSON.stringify(this.config));
    conf.display.preferences.show_default_blocks = var1.showDefaultBlock;
    var1.config = conf;
    var1.theme = this.theme;
    let x=  JSON.stringify(var1)
    let checkoutUrl='https://ayush-razorpay.github.io/ayush-razorpay/test.html?'+'request_identifier='+Math.random()+'&data='+encodeURI(x);
    this.setValue(checkoutUrl);
    
  }

  replaceFullConfigJson(_toSet){

    this.checkoutConfig = _toSet;
    this.config = _toSet.config;
    this.show_default_blocksStatus = this.config.display.preferences.show_default_blocks;
    this.theme = _toSet.theme;
    this. updateUrl();

  }

   getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

}


