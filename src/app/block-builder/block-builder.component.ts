import { Component, ComponentFactoryResolver, OnInit, QueryList, ViewChild, ViewContainerRef } from '@angular/core';
import { GetMethodsService } from '../common/get-methods.service';
import { CardBlockComponent } from '../payment-blocks/card-block/card-block.component';

@Component({
  selector: 'app-block-builder',
  templateUrl: './block-builder.component.html',
  styleUrls: ['./block-builder.component.css']
})
export class BlockBuilderComponent implements OnInit {
  @ViewChild('dynamicInsert') dynamicInsert: QueryList<ViewContainerRef>;

  constructor(private methodsService : GetMethodsService,
    private viewContainerRef: ViewContainerRef
    ,private componentFactoryResolver: ComponentFactoryResolver) { }


  paymentBlockList = new Array();

  ngOnInit(): void {

    console.log(this.methodsService.fetchMethods());
    
  }

  addABlock(type){
    console.log("method called");
  

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(CardBlockComponent);
   // const containerRef = this.viewContainerRef;
   // containerRef.clear();
  //  const dyynamicComponent = <CardBlockComponent>this.dynamicInsert.reset()
  
    //containerRef.createComponent(componentFactory);

  }


}
