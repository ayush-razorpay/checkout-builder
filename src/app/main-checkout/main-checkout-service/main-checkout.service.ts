import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainCheckoutService {

  constructor() { }

  mainModel:any;

  patchMode(obj:object):void{

    console.log('injected method called');

  }

}
