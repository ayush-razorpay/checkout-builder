import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './nav/nav.component';
import { CheckoutBuilderComponent } from './checkout-builder/checkout-builder.component';
import { CheckoutDemoComponent, SafePipe } from './checkout-demo/checkout-demo.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { MainCheckoutComponent } from './main-checkout/main-checkout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoServiceService } from './checkout-demo/service/demo-service.service';
import { HttpClientModule } from '@angular/common/http';
import { BlockBuilderComponent } from './block-builder/block-builder.component';
import { CardBlockComponent } from './payment-blocks/card-block/card-block.component';
import { NetbankingBlockComponent } from './payment-blocks/netbanking-block/netbanking-block.component';
import { PaymentBlockComponent } from './payment-blocks/payment-block/payment-block.component';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormlyFieldInput } from './formly-field-input';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CheckoutBuilderComponent,
    CheckoutDemoComponent,
    MainCheckoutComponent,
    SafePipe,
    BlockBuilderComponent,
    CardBlockComponent,
    NetbankingBlockComponent,
    PaymentBlockComponent,
    FormlyFieldInput
    
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ColorPickerModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyBootstrapModule,
    BrowserAnimationsModule,
    DragDropModule,
    FormlyModule.forRoot({
      types: [
        { name: 'colorPicker', component: FormlyFieldInput },
      ]
    }),    
  ],
  providers: [DemoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
