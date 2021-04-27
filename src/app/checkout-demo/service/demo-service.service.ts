import { ApplicationRef, ChangeDetectorRef } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoServiceService {


  configcheckoutObject : any;

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


  updateDemoComponentConfig(r : any){
  
    this.configcheckoutObject.config= r;

  let x=  JSON.stringify(this.configcheckoutObject)

   this.checkoutUrl='https://ayush-razorpay.github.io/ayush-razorpay/test.html?'+'request_identifier='+Math.random()+'&data='+encodeURI(x);

   console.log("------",this.checkoutUrl);
   
   this.setValue(this.checkoutUrl);

  }



  
}
