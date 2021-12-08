import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from './components/auth/auth.component';
import {OrdersComponent} from './components/orders/orders.component';
import {OrderInfoComponent} from "./components/order-info/order-info.component";
import {CreateOrderComponent} from "./components/create-order/create-order.component";
import {UserOrdersComponent} from "./components/user-orders/user-orders.component";

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: 'orders',
    component: OrdersComponent
  },
  {
    path: 'order-info/:orderId',
    component: OrderInfoComponent
  },
  {
    path: 'create-order',
    component: CreateOrderComponent
  },
  {
    path: 'user-orders',
    component: UserOrdersComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

