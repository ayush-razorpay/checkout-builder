import { ApplicationRef } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoServiceService {

  configcheckoutObject : any = {
    tnxType: "order_id",
   theme:{ color:this.getRandomColor()},
  };

  public urlChangeSubject  : Subject<string> = new Subject<string>();


  getValue(): Observable<string> {
    return this.urlChangeSubject.asObservable();
  }

  setValue(newValue): void {
    this.urlChangeSubject.next(newValue);
  }

 public checkoutUrl : string = "https://www.razorpay.com";

  constructor(private c:ApplicationRef) { }

  updateDemoComponent(r : any){

    console.log('--------',r);
  
    this.configcheckoutObject=r;
  let x=  JSON.stringify(this.configcheckoutObject)

   this.checkoutUrl='https://ayush-razorpay.github.io/ayush-razorpay/test.html?'+'request_identifier='+Math.random()+'&data='+encodeURI(x);

   console.log("------",this.checkoutUrl);

   this.setValue(this.checkoutUrl);

  }

//for block builder
  updateDemoComponentConfig(r : any){
  
    console.log("block builder JSON",r);
    this.configcheckoutObject.config= r;

  let x=  JSON.stringify(this.configcheckoutObject)

   this.checkoutUrl='https://ayush-razorpay.github.io/ayush-razorpay/test.html?'+'request_identifier='+Math.random()+'&data='+encodeURI(x);

   console.log("------",this.checkoutUrl);
   
   this.setValue(this.checkoutUrl);

  }

  //for code editor
  updateTheConfigJson(r : any){
  
    this.configcheckoutObject= r;

  let x=  JSON.stringify(this.configcheckoutObject)

   this.checkoutUrl='https://ayush-razorpay.github.io/ayush-razorpay/test.html?'+'request_identifier='+Math.random()+'&data='+encodeURI(x);

   console.log("------",this.checkoutUrl);
   
   this.setValue(this.checkoutUrl);

  }



  getconfigcheckoutMode(){

    return this.configcheckoutObject;
  }


   getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
}
