
/* A payment instrument is a combination of the payment method and its associated properties. */

export abstract class PaymentIntrument{


    name : string;

    constructor(name:string){
        this.name=name;
    }
    
      addProperty(map : object , key: string){

        if(map.hasOwnProperty(key) ){

            if( map[key] != null && map[key] instanceof Array)
            {
                this[key]= map[key];
            }
     
            }

    }

}