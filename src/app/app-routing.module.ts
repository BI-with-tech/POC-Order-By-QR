import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './core/core.component';
import { KotComponent } from './core/kot/kot.component';
import { CustomerDetailsComponent } from './core/order/customer-details/customer-details.component';
import { MenuComponent } from './core/order/menu/menu.component';
import { OrderComponent } from './core/order/order.component';
import { StatusComponent } from './core/order/status/status.component';

const routes: Routes = [
  {path: '', component: CoreComponent},
  {path: 'order', component: OrderComponent},
  {path: 'customer-details', component: CustomerDetailsComponent},
  {path: 'menu/:name/:table/:comments', component: MenuComponent},
  {path: 'status', component: StatusComponent},
  {path: 'kot', component: KotComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
