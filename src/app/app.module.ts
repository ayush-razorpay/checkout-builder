import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './nav/nav.component';
import { CheckoutBuilderComponent } from './checkout-builder/checkout-builder.component';
import { CheckoutDemoComponent } from './checkout-demo/checkout-demo.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { ToggelSwitchComponent } from './toggel-switch/toggel-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CheckoutBuilderComponent,
    CheckoutDemoComponent,
    ToggelSwitchComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ColorPickerModule,
  ],
  providers: [ToggelSwitchComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
