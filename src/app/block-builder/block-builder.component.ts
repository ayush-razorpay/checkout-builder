import { Component, OnInit } from '@angular/core';
import { GetMethodsService } from '../common/get-methods.service';

@Component({
  selector: 'app-block-builder',
  templateUrl: './block-builder.component.html',
  styleUrls: ['./block-builder.component.css']
})
export class BlockBuilderComponent implements OnInit {

  constructor(private methodsService : GetMethodsService) { }

  ngOnInit(): void {


    console.log(this.methodsService.fetchMethods());
    
  }

}
