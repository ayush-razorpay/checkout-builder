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
import { CodeEditorModule } from '@ngstack/code-editor';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CheckoutBuilderComponent,
    CheckoutDemoComponent,
    ToggelSwitchComponent,
    MainCheckoutComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ColorPickerModule,
    FormsModule,
    ReactiveFormsModule,
    CodeEditorModule.forRoot()
  ],
  providers: [ToggelSwitchComponent,DemoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
