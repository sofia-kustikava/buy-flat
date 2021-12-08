import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {OrdersService} from "../../services/orders.service";
import {Order} from "../../dto/Order";

@Component({
  selector: 'app-main',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  public orders: Order[];
  userType = localStorage.getItem('userType');

  constructor(private router: Router,
              private ordersService: OrdersService) {
  }

  ngOnInit(): void {
    this.ordersService.getAll().subscribe(orders => {
      this.orders = orders;
    })
  }
}
