
/* A payment instrument is a combination of the payment method and its associated properties. */

export abstract class PaymentIntrument{


    // name : string;

    // constructor(name:string){
    //     this.name=name;
    // }
        constructor(){
  
    }
    
      addProperty(map : object , key1: string){

        let key = key1.toLowerCase();

        if(map.hasOwnProperty(key) ){

            if( map[key] != null && map[key] instanceof Array)
            {
                this[key]=map[key];
            }
     
            }

    }

}