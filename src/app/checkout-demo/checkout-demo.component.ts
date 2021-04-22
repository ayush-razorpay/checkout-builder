import { ChangeDetectorRef, Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
import { DemoServiceService } from './service/demo-service.service';


@Component({
  selector: 'app-checkout-demo',
  templateUrl: './checkout-demo.component.html',
  styleUrls: ['./checkout-demo.component.css']
})

export class CheckoutDemoComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer,
    private s:DemoServiceService,
    private changeRef : ChangeDetectorRef) { }
  url="https://razorpay.com/";
  ngOnInit(): void {

    this.s.getValue().subscribe((value) => {

     
      this.url = value;
  
      console.log("value change detected");



    });
  }


  //url='https://ayush-razorpay.github.io/ayush-razorpay/test.html?key=rzp_test_oJPbj9rC1rDGAQ&amount=1000&currency=INR&name=Acme%20Corp&description=Test%20Transaction&image=https://example.com/your_logo&prefill[name]=Gaurav%20Kumar&prefill[email]=gaurav.kumar@example.com&prefill[contact]=9999999999&notes[address]=Razorpay%20Corporate%20Office&theme[color]=#3399cc';

  

}


@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
} 
