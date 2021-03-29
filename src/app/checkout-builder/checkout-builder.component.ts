import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-builder',
  templateUrl: './checkout-builder.component.html',
  styleUrls: ['./checkout-builder.component.css']
})
export class CheckoutBuilderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  color = '#76988d';
  model = {
    left: true,
    middle: false,
    right: false
  };
}
