

  export class PaymentBlock {
    name: string;
    id: string;
    status: boolean;
    instruments :  Array<PaymentInstrument>  = new Array();
    
    constructor(name: string,id: string, status: boolean){
      this.name=name;
      this.id=id;
      this.status=status;
      this.instruments= new Array();
    }
  
  }
  
  
  export abstract class PaymentInstrument {
    id: string;
    type: string;
    parentBlockId:string;
   abstract getConfJsob():object;
  }