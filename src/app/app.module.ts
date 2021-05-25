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
import { UpiBlockComponent } from './payment-blocks/upi-block/upi-block.component';
import { WalletBlockComponent } from './payment-blocks/wallet-block/wallet-block.component';
import { CardlessEmiBlockComponent } from './payment-blocks/cardless-emi-block/cardless-emi-block.component';
import { PaylaterBlockComponent } from './payment-blocks/paylater-block/paylater-block.component';
import { CodeEditorModule } from '@ngstack/code-editor';
import { CodeEditorComponent } from './code-editor/code-editor.component';
import { AdditionalConfigComponent } from './additional-config/additional-config.component';


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
    FormlyFieldInput,
    UpiBlockComponent,
    WalletBlockComponent,
    CardlessEmiBlockComponent,
    PaylaterBlockComponent,
    CodeEditorComponent,
    AdditionalConfigComponent

    
    
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
    CodeEditorModule.forRoot()    
  ],
  providers: [DemoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
