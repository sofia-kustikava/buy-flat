import {Component, OnInit} from '@angular/core';
import {Order} from "../../dto/Order";
import {OrdersService} from "../../services/orders.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.css']
})
export class OrderInfoComponent implements OnInit {
  order: Order;
  orderId: number;
  userType = localStorage.getItem('userType');

  constructor(private router: Router,
              private ordersService: OrdersService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => this.orderId = params['orderId']);
    this.ordersService.getById(this.orderId).subscribe(order => this.order = order);
  }

  reserve() {
    this.ordersService.choose(this.orderId).subscribe();
  }
}
