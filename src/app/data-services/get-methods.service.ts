import { Injectable, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root",
})
export class GetMethodsService {
  constructor(private httpClient: HttpClient, private _snackBar: MatSnackBar) {}
  public key = "rzp_test_oJPbj9rC1rDGAQ";
  json =
    '{"entity":"methods","card":true,"debit_card":true,"credit_card":true,"prepaid_card":true,"card_networks":{"AMEX":0,"DICL":0,"MC":1,"MAES":1,"VISA":1,"JCB":0,"RUPAY":1,"BAJAJ":0},"card_subtype":{"consumer":1,"business":1},"amex":false,"netbanking":{"AIRP":"Airtel Payments Bank","ANDB":"Andhra Bank","BARB_R":"Bank of Baroda - Retail Banking","MAHB":"Bank of Maharashtra","CNRB":"Canara Bank","CSBK":"Catholic Syrian Bank","CBIN":"Central Bank of India","DCBL":"DCB Bank","DEUT":"Deutsche Bank","ESFB":"Equitas Small Finance Bank","FDRL":"Federal Bank","FSFB":"Fincare Small Finance Bank","IBKL":"IDBI","IDFB":"IDFC FIRST Bank","IDIB":"Indian Bank","ALLA":"Indian Bank (Erstwhile Allahabad Bank)","IOBA":"Indian Overseas Bank","INDB":"Indusind Bank","JAKA":"Jammu and Kashmir Bank","JSFB":"Jana Small Finance Bank","KARB":"Karnataka Bank","KVBL":"Karur Vysya Bank","KKBK":"Kotak Mahindra Bank","LAVB_R":"Lakshmi Vilas Bank - Retail Banking","ORBC":"PNB (Erstwhile-Oriental Bank of Commerce)","UTBI":"PNB (Erstwhile-United Bank of India)","PSIB":"Punjab & Sind Bank","PUNB_R":"Punjab National Bank - Retail Banking","RATN":"RBL Bank","SRCB":"Saraswat Co-operative Bank","SVCB":"Shamrao Vithal Co-operative Bank","SIBL":"South Indian Bank","SCBL":"Standard Chartered Bank","SBBJ":"State Bank of Bikaner and Jaipur","SBHY":"State Bank of Hyderabad","SBIN":"State Bank of India","SBMY":"State Bank of Mysore","STBP":"State Bank of Patiala","SBTR":"State Bank of Travancore","TMBL":"Tamilnadu Mercantile Bank","UCBA":"UCO Bank","UBIN":"Union Bank of India","CORP":"Union Bank of India (Erstwhile Corporation Bank)","VIJB":"Vijaya Bank","YESB":"Yes Bank"},"wallet":{"mobikwik":true,"payzapp":true,"olamoney":true,"airtelmoney":true,"freecharge":true,"jiomoney":true,"phonepe":true},"emi":true,"upi":true,"cardless_emi":[],"paylater":{"icic":true},"google_pay_cards":false,"app":{"cred":0},"nach":false,"emi_subvention":"customer","emi_plans":{"KKBK":{"min_amount":300000,"plans":{"3":12,"6":12,"9":14,"12":14,"18":15,"24":15}},"UTIB":{"min_amount":300000,"plans":{"18":15,"24":15,"3":13,"6":13,"9":14,"12":14}},"INDB":{"min_amount":200000,"plans":{"6":13,"9":13,"12":13,"18":15,"24":15}},"RATN":{"min_amount":100000,"plans":{"3":13,"6":14,"9":15,"12":15,"18":15,"24":15}},"HDFC":{"min_amount":300000,"plans":{"18":15,"24":15,"3":15,"6":15,"9":15,"12":15}},"SCBL":{"min_amount":250000,"plans":{"3":13,"6":13,"9":14,"12":14}},"BARB":{"min_amount":250000,"plans":{"3":13,"6":13,"9":13,"12":13,"18":15,"24":15}},"ICIC":{"min_amount":150000,"plans":{"3":12.99,"6":13.99,"9":13.99,"12":13.99,"24":14.99,"18":14.99}},"YESB":{"min_amount":150000,"plans":{"18":15,"24":15,"3":13,"6":13,"9":14,"12":14}},"CITI":{"min_amount":250000,"plans":{"3":13,"6":13,"9":15,"12":15,"18":15,"24":15}},"AMEX":{"min_amount":500000,"plans":{"3":14,"6":14,"9":14,"12":14,"18":14,"24":14}}},"emi_options":{"KKBK":[{"duration":3,"interest":12,"subvention":"customer","min_amount":300000,"merchant_payback":"1.97"},{"duration":6,"interest":12,"subvention":"customer","min_amount":300000,"merchant_payback":"3.41"},{"duration":9,"interest":14,"subvention":"customer","min_amount":300000,"merchant_payback":"5.59"},{"duration":12,"interest":14,"subvention":"customer","min_amount":300000,"merchant_payback":"7.19"},{"duration":18,"interest":15,"subvention":"customer","min_amount":300000,"merchant_payback":"10.95"},{"duration":24,"interest":15,"subvention":"customer","min_amount":300000,"merchant_payback":"14.07"}],"UTIB":[{"duration":18,"interest":15,"subvention":"customer","min_amount":300000,"merchant_payback":"10.95"},{"duration":24,"interest":15,"subvention":"customer","min_amount":300000,"merchant_payback":"14.07"},{"duration":3,"interest":13,"subvention":"customer","min_amount":300000,"merchant_payback":"2.13"},{"duration":6,"interest":13,"subvention":"customer","min_amount":300000,"merchant_payback":"3.68"},{"duration":9,"interest":14,"subvention":"customer","min_amount":300000,"merchant_payback":"5.59"},{"duration":12,"interest":14,"subvention":"customer","min_amount":300000,"merchant_payback":"7.19"}],"INDB":[{"duration":6,"interest":13,"subvention":"customer","min_amount":200000,"merchant_payback":"3.68"},{"duration":9,"interest":13,"subvention":"customer","min_amount":200000,"merchant_payback":"5.21"},{"duration":12,"interest":13,"subvention":"customer","min_amount":200000,"merchant_payback":"6.70"},{"duration":18,"interest":15,"subvention":"customer","min_amount":200000,"merchant_payback":"10.95"},{"duration":24,"interest":15,"subvention":"customer","min_amount":200000,"merchant_payback":"14.07"}],"RATN":[{"duration":3,"interest":13,"subvention":"customer","min_amount":100000,"merchant_payback":"2.13"},{"duration":6,"interest":14,"subvention":"customer","min_amount":100000,"merchant_payback":"3.96"},{"duration":9,"interest":15,"subvention":"customer","min_amount":100000,"merchant_payback":"5.97"},{"duration":12,"interest":15,"subvention":"customer","min_amount":100000,"merchant_payback":"7.67"},{"duration":18,"interest":15,"subvention":"customer","min_amount":100000,"merchant_payback":"10.95"},{"duration":24,"interest":15,"subvention":"customer","min_amount":100000,"merchant_payback":"14.07"}],"HDFC":[{"duration":18,"interest":15,"subvention":"customer","min_amount":300000,"merchant_payback":"10.95"},{"duration":24,"interest":15,"subvention":"customer","min_amount":300000,"merchant_payback":"14.07"},{"duration":3,"interest":15,"subvention":"customer","min_amount":300000,"merchant_payback":"2.45"},{"duration":6,"interest":15,"subvention":"customer","min_amount":300000,"merchant_payback":"4.23"},{"duration":9,"interest":15,"subvention":"customer","min_amount":300000,"merchant_payback":"5.97"},{"duration":12,"interest":15,"subvention":"customer","min_amount":300000,"merchant_payback":"7.67"}],"SCBL":[{"duration":3,"interest":13,"subvention":"customer","min_amount":250000,"merchant_payback":"2.13"},{"duration":6,"interest":13,"subvention":"customer","min_amount":250000,"merchant_payback":"3.68"},{"duration":9,"interest":14,"subvention":"customer","min_amount":250000,"merchant_payback":"5.59"},{"duration":12,"interest":14,"subvention":"customer","min_amount":250000,"merchant_payback":"7.19"}],"BARB":[{"duration":3,"interest":13,"subvention":"customer","min_amount":250000,"merchant_payback":"2.13"},{"duration":6,"interest":13,"subvention":"customer","min_amount":250000,"merchant_payback":"3.68"},{"duration":9,"interest":13,"subvention":"customer","min_amount":250000,"merchant_payback":"5.21"},{"duration":12,"interest":13,"subvention":"customer","min_amount":250000,"merchant_payback":"6.70"},{"duration":18,"interest":15,"subvention":"customer","min_amount":250000,"merchant_payback":"10.95"},{"duration":24,"interest":15,"subvention":"customer","min_amount":250000,"merchant_payback":"14.07"}],"ICIC":[{"duration":3,"interest":12.99,"subvention":"customer","min_amount":150000,"merchant_payback":"2.13"},{"duration":6,"interest":13.99,"subvention":"customer","min_amount":150000,"merchant_payback":"3.96"},{"duration":9,"interest":13.99,"subvention":"customer","min_amount":150000,"merchant_payback":"5.59"},{"duration":12,"interest":13.99,"subvention":"customer","min_amount":150000,"merchant_payback":"7.18"},{"duration":24,"interest":14.99,"subvention":"customer","min_amount":150000,"merchant_payback":"14.06"},{"duration":18,"interest":14.99,"subvention":"customer","min_amount":150000,"merchant_payback":"10.94"}],"YESB":[{"duration":18,"interest":15,"subvention":"customer","min_amount":150000,"merchant_payback":"10.95"},{"duration":24,"interest":15,"subvention":"customer","min_amount":150000,"merchant_payback":"14.07"},{"duration":3,"interest":13,"subvention":"customer","min_amount":150000,"merchant_payback":"2.13"},{"duration":6,"interest":13,"subvention":"customer","min_amount":150000,"merchant_payback":"3.68"},{"duration":9,"interest":14,"subvention":"customer","min_amount":150000,"merchant_payback":"5.59"},{"duration":12,"interest":14,"subvention":"customer","min_amount":150000,"merchant_payback":"7.19"}],"CITI":[{"duration":3,"interest":13,"subvention":"customer","min_amount":250000,"merchant_payback":"2.13"},{"duration":6,"interest":13,"subvention":"customer","min_amount":250000,"merchant_payback":"3.68"},{"duration":9,"interest":15,"subvention":"customer","min_amount":250000,"merchant_payback":"5.97"},{"duration":12,"interest":15,"subvention":"customer","min_amount":250000,"merchant_payback":"7.67"},{"duration":18,"interest":15,"subvention":"customer","min_amount":250000,"merchant_payback":"10.95"},{"duration":24,"interest":15,"subvention":"customer","min_amount":250000,"merchant_payback":"14.07"}],"AMEX":[{"duration":3,"interest":14,"subvention":"customer","min_amount":500000,"merchant_payback":"2.29"},{"duration":6,"interest":14,"subvention":"customer","min_amount":500000,"merchant_payback":"3.96"},{"duration":9,"interest":14,"subvention":"customer","min_amount":500000,"merchant_payback":"5.59"},{"duration":12,"interest":14,"subvention":"customer","min_amount":500000,"merchant_payback":"7.19"},{"duration":18,"interest":14,"subvention":"customer","min_amount":500000,"merchant_payback":"10.27"},{"duration":24,"interest":14,"subvention":"customer","min_amount":500000,"merchant_payback":"13.22"}]},"recurring":{"card":{"credit":["MasterCard","Visa"]},"upi":true,"nach":false},"upi_intent":true}';

  public async changeApiKey(key: string) {
    return new Promise((resolve, reject) => {
      this.openSnakBarWithMessage("key changed");

      if (key.length != 23) {
        this.openSnakBarWithMessage("Invalid key (length = 23)");
        reject("Invalid key (length = 23)");
      }

      else if (!(key.startsWith("rzp_test_") || key.startsWith("rzp_live_"))) {
        this.openSnakBarWithMessage(
          "Invalid key (key starts with rzp_test_ or  rzp_live_)"
        );
        reject("Invalid key (key starts with rzp_test_ or  rzp_live_)");
      }

      else{
      // const promise = this.httpClient.get('https://'+key+'@api.razorpay.com/v1/methods').toPromise();
      const promise = this.httpClient
        .get("http://localhost:8882/paymentMethods/" + btoa(key + ":"))
        .toPromise();
      promise
        .then((data:any) => {
          console.log("Promise resolved with: " + JSON.stringify(data));

          if(data.error){
            let errorToReturn = "Failed to fetch Payment methods for the updated key. error :"+data.error.description;
            this.openSnakBarWithMessage(errorToReturn);
            alert(errorToReturn);
            console.error(errorToReturn);
            reject(errorToReturn);
            return;
          }

          this.json = JSON.stringify(data);
          this.key = key;
          this.openSnakBarWithMessage("Key update Success. Payment methods fetched");
          resolve('succcess');
        })
        .catch((error) => {
          console.log("Promise rejected with " + JSON.stringify(error));
          this.openSnakBarWithMessage("Failed to fetch Payment methods for the updated key");
          alert("Failed to fetch Payment methods for the updated key.");
          console.error(error);
          reject(error);
        });
      }
    });
    
  }

  public fetchMethods(): any {
    return JSON.parse(this.json);
  }

  openSnakBarWithMessage(message: string) {
    this._snackBar.open(message, "close", {
      horizontalPosition: "center",
      verticalPosition: "bottom",
    });
  }
}
