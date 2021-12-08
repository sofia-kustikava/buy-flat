import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {AuthComponent} from './components/auth/auth.component';
import {AppRoutingModule} from './app-routing.module';
import { OrdersComponent } from './components/orders/orders.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderInfoComponent } from './components/order-info/order-info.component';
import { CreateOrderComponent } from './components/create-order/create-order.component';
import { UserOrdersComponent } from './components/user-orders/user-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    OrdersComponent,
    OrderInfoComponent,
    CreateOrderComponent,
    UserOrdersComponent,
  ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
