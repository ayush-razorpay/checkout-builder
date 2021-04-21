export class RzpCheckout{

    key : string;
    image : string;
    amount:number;
    currency = 'INR';
    name:string;
    notes = new Map();
    entityType:string;
    entityId:string;
    color:string;
    callback_url:string;
    timeout:number;
    description:string;
    retry:boolean;
    nativeOtp:boolean;
    personalization:boolean;
    recurringPaytm:boolean;
    remeberCustomer:boolean;


    theme:{
        color:string;
    }

    constructor() {}
    
}