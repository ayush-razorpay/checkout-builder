import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggel-switch',
  templateUrl: './toggel-switch.component.html',
  styleUrls: ['./toggel-switch.component.css']
})
export class ToggelSwitchComponent implements OnInit, OnDestroy{
  
  ngOnDestroy(): void {

  }

  build( isEnbaled?:Boolean , description?  : string, name? : string) { 
    
    this.isEnbaled=isEnbaled;
    this.desc=description;
    this.name=name;

  }

  ngOnInit(): void {
  }

  @Input() isEnbaled : Boolean = false;
  @Input() desc : string = "use this to descibe your toggel";
  @Input() name : string = "toggel name";

  public getIsEnabled(){
    return this.isEnbaled;
  }


}
