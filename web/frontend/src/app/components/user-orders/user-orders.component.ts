import {Component, OnInit} from '@angular/core';
import {OrdersService} from "../../services/orders.service";
import {Order} from "../../dto/Order";

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css']
})
export class UserOrdersComponent implements OnInit {
  orders: Order[];

  constructor(private ordersService: OrdersService) {
  }

  ngOnInit(): void {
    this.ordersService.getUserOrders().subscribe(orders => this.orders = orders);
  }

}
