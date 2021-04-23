import { Component, OnInit } from '@angular/core';
import { PaymentBlockInterface } from '../PaymentBlocksInterface';

@Component({
  selector: 'app-netbanking-block',
  templateUrl: './netbanking-block.component.html',
  styleUrls: ['./netbanking-block.component.css']
})
export class NetbankingBlockComponent implements OnInit,PaymentBlockInterface {

  constructor() { }
  getConfJsob(): object {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

}
