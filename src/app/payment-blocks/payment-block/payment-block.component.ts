import { Component, Input, OnInit } from '@angular/core';
import { BlockBuilderServiceService } from 'src/app/block-builder/block-builder-service.service';

@Component({
  selector: 'app-payment-block',
  templateUrl: './payment-block.component.html',
  styleUrls: ['./payment-block.component.css']
})
export class PaymentBlockComponent implements OnInit {

  constructor(private blockBuilderService:BlockBuilderServiceService) { }

  ngOnInit(): void {
  }

  @Input() type : string ;
  @Input() id : string ;


  public isCollapsed = false;

  removeBlock(){
this.blockBuilderService.removeBlock(this.id);
  }
}
