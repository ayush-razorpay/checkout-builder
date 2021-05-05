import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-instrument-block',
  templateUrl: './instrument-block.component.html',
  styleUrls: ['./instrument-block.component.css']
})
export class InstrumentBlockComponent implements OnInit {
  @Input() name : string ;
  @Input() id : string ;
  
  constructor() { }
 public isCollapsed = false;
  ngOnInit(): void {
  }

}
