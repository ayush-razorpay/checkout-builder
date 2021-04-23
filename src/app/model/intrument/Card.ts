import { PaymentIntrument } from "./PaymentIntrument";

export class Card extends PaymentIntrument {

    readonly method= "card";
    issuers  = new Array();
    networks  = new Array();
    types  = new Array();

    constructor(map:Object){


        super()
        let temp1 = JSON.parse(JSON.stringify(map));

        this.addProperty(temp1,'issuers');
        this.addProperty(temp1,'networks');
        this.addProperty(temp1,'types');
     
    }


 

    // if(map.hasOwnProperty('issuers') ){

    //     if( map['issuers'] != null && map['issuers'] instanceof Array)
    //     {
    //         this['issuers']= map['issuers'];
    //     }
 
    //     }
    
}