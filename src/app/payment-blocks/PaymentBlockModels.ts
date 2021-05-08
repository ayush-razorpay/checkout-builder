
  export abstract class PaymentInstrument {
    id: string;
    type: string;
   abstract getConfJsob():object;
  }