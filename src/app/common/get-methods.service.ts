import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetMethodsService   {

  constructor(private httpClient: HttpClient) { }



  // this.setMethods (  this.http.get<Observable<Object>>('https://api.razorpay.com/v1/methods', this.requestOptions) );
  


/**
 * auth to be take from UI 
 * todo: refactor this
 */
  
  headerDict = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': 'Basic cnpwX2xpdmVfZ00yQjlBdGlpZVU0QUM6',

'Access-Control-Allow-Origin': '*',
'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
'Cookie':'razorpay_api_session=eyJpdiI6IklHazU5YTgyU1wvUlByelA5OUNTSklRPT0iLCJ2YWx1ZSI6ImwzbFRpXC9GUmZRamtVT0UrSTA0SDVzUkFES0R5ZFZLMU9PbGZ3a0NYVEdhWWZ2UUxBVnZlelowZXM1eWNabTJmU2U5ZFFcL1wvbjJrYnVRTUV0cGVsOGFwbFZRbGtiY2RTNzF0TE4xb2ZZUTdtSStNN1pFV0xOZmM0YzlaaG1TZmFNIiwibWFjIjoiZmYwNWU5M2IxN2Q3ZmUyNGUzMDYwYmI4OTZhNDhlMDI4YzIwMWE5Y2Y5NzI4NDM4Y2FhNzg2NjAzOTUxZjQ1NSJ9'
}

 requestOptions = {                                                                                                                                                                                 
  headers: new HttpHeaders(this.headerDict), 
};


public fetchMethods():any{
  const promise = this.httpClient.get('https://api.razorpay.com/v1/methods',this.requestOptions).toPromise();
  console.log(promise);  
  promise.then((data)=>{
    console.log("Promise resolved with: " + JSON.stringify(data));
    return data;
  }).catch((error)=>{
    console.log("Promise rejected with " + JSON.stringify(error));
  });
}



}
