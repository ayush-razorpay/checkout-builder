import { Injectable } from '@angular/core';
import { PaymentBlock } from 'src/app/payment-blocks/PaymentBlockModels';

@Injectable({
  providedIn: 'root'
})
export class PaymentBlocksService {

  constructor() { }
  
  paymentBlocks: Array<PaymentBlock> = [];

}
