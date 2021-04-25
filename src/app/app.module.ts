import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './nav/nav.component';
import { CheckoutBuilderComponent } from './checkout-builder/checkout-builder.component';
import { CheckoutDemoComponent, SafePipe } from './checkout-demo/checkout-demo.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { ToggelSwitchComponent } from './toggel-switch/toggel-switch.component';
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
import { CredentialsComponent } from './main-checkout-blocks/credentials/credentials.component';
import { ConfigsComponent } from './main-checkout-blocks/configs/configs.component';
import { MainBlockComponent } from './main-checkout-blocks/main-block/main-block.component';
import { AdditionalConfigsComponent } from './main-checkout-blocks/additional-configs/additional-configs.component';
import { CallbackConfigsComponent } from './main-checkout-blocks/callback-configs/callback-configs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CheckoutBuilderComponent,
    CheckoutDemoComponent,
    ToggelSwitchComponent,
    MainCheckoutComponent,
    SafePipe,
    BlockBuilderComponent,
    CardBlockComponent,
    NetbankingBlockComponent,
    PaymentBlockComponent,
    CredentialsComponent,
    ConfigsComponent,
    MainBlockComponent,
    AdditionalConfigsComponent,
    CallbackConfigsComponent,
    
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
    DragDropModule
    
  ],
  providers: [ToggelSwitchComponent,DemoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
