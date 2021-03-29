import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";


@Component({
  selector: 'app-checkout-demo',
  templateUrl: './checkout-demo.component.html',
  styleUrls: ['./checkout-demo.component.css']
})

export class CheckoutDemoComponent implements OnInit {

  constructor(sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }


  url='https://ayush-razorpay.github.io/ayush-razorpay/test.html';
  
}


@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
} 
