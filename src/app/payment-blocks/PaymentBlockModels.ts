import { OnInit } from "@angular/core";
import { BlockBuilderServiceService } from "../block-builder/block-builder-service.service";


 export  class PaymentBlock{

    index : number;
    name :  string;
    instruments :  Array<PaymentInstrument>  = new Array();
  
    
  }
  
  export abstract class PaymentInstrument {

    id: string;
    type: string;
 
  }