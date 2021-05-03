import { Injectable } from '@angular/core';
import { PaymentBlocks } from '../block-builder.component';

@Injectable({
  providedIn: 'root'
})
export class PaymentBlocksService {

  constructor() { }
  
  paymentBlocks: Array<PaymentBlocks> = [];

}
