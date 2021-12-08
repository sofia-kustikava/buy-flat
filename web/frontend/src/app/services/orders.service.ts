import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SERVER_PATH} from "../../globals";
import {Order} from "../dto/Order";
import {CreateOrder} from "../dto/CreateOrder";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) {
  }

  create(order: CreateOrder) {
    return this.http.post<void>(SERVER_PATH + '/order/create', order, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    });
  }

  choose(id: number) {
    return this.http.post<void>(SERVER_PATH + '/order/' + id, null, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    });
  }

  getById(id: number): Observable<Order> {
    return this.http.get<Order>(SERVER_PATH + '/order/' + id, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    });
  }

  getAll(): Observable<Order[]> {
    return this.http.get<Order[]>(SERVER_PATH + '/order/all', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    });
  }

  getUserOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(SERVER_PATH + '/order/users', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    });
  }
}
