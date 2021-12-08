import {Realtor} from "./Realtor";
import {Flat} from "./Flat";
import {Client} from "./Client";
import {OrderStatus} from "./OrderStatus";

export class Order {
  public id: number;
  public realtor: Realtor;
  public flat: Flat;
  public client: Client;
  public postedDate: Date;
  public status: OrderStatus;
  public price: number;


  constructor(id: number, realtor: Realtor, flat: Flat, client: Client, postedDate: Date, status: OrderStatus, price: number) {
    this.id = id;
    this.realtor = realtor;
    this.flat = flat;
    this.client = client;
    this.postedDate = postedDate;
    this.status = status;
    this.price = price;
  }
}
