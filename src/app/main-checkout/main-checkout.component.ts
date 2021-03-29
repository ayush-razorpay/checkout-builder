import { Component, OnInit } from '@angular/core';
import { RzpCheckout } from '../model/RzpCheckout';

@Component({
  selector: 'app-main-checkout',
  templateUrl: './main-checkout.component.html',
  styleUrls: ['./main-checkout.component.css']
})
export class MainCheckoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  color = '#76988d';
  active = 1;

  model : RzpCheckout = new RzpCheckout();

}
