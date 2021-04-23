import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-block',
  templateUrl: './payment-block.component.html',
  styleUrls: ['./payment-block.component.css']
})
export class PaymentBlockComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() type : string ;

}
