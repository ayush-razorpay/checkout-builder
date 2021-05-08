
 export class PaymentBlock{

    index : number;
    name :  string;
    instruments :  Array<PaymentInstrument>  = new Array();
      
  }

  export abstract class PaymentInstrument {
    id: string;
    type: string;
   abstract getConfJsob():object;

  }