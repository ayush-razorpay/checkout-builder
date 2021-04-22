import { ApplicationRef, ChangeDetectorRef } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { RzpCheckout } from 'src/app/model/RzpCheckout';

@Injectable({
  providedIn: 'root'
})
export class DemoServiceService {


  public urlChangeSubject  : Subject<string> = new Subject<string>();


  getValue(): Observable<string> {
    return this.urlChangeSubject.asObservable();
  }

  setValue(newValue): void {
    this.urlChangeSubject.next(newValue);
  }

 public checkoutUrl : string = "https://www.razorpay.com";

  constructor(private c:ApplicationRef) { }

  updateDemoComponent(r : RzpCheckout){

  
  let x=  JSON.stringify(r)

   this.checkoutUrl='https://ayush-razorpay.github.io/ayush-razorpay/test.html?'+'request_identifier='+Math.random()+'&data='+encodeURI(x);

   console.log("------",this.checkoutUrl);
   this.setValue(this.checkoutUrl);

  }
}
