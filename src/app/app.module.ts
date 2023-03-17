import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialCustomModule } from '../material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreComponent } from './core/core.component';
import { OrderComponent } from './core/order/order.component';
import { MenuComponent } from './core/order/menu/menu.component';
import { CustomerDetailsComponent } from './core/order/customer-details/customer-details.component';
import { MenuItemComponent } from './core/order/menu/menu-item/menu-item.component';
import { StatusComponent } from './core/order/status/status.component';
import { KotComponent } from './core/kot/kot.component';
import { OrderItemComponent } from './core/kot/order-item/order-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    OrderComponent,
    MenuComponent,
    CustomerDetailsComponent,
    MenuItemComponent,
    StatusComponent,
    KotComponent,
    OrderItemComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule, 
    MaterialCustomModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
