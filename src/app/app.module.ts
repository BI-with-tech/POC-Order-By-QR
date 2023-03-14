import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreComponent } from './core/core.component';
import { OrderComponent } from './core/order/order.component';
import { MenuComponent } from './core/order/menu/menu.component';
import { CustomerDetailsComponent } from './core/order/customer-details/customer-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    OrderComponent,
    MenuComponent,
    CustomerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
