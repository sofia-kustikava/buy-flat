import {CreateFlat} from "./CreateFlat";

export class CreateOrder {
  constructor(flat: CreateFlat, price: number) {
    this.flat = flat;
    this.price = price;
  }

  public flat: CreateFlat;
  public price: number;
}
