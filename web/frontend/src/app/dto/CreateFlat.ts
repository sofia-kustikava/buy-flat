import {Street} from "./Street";
import {Bathroom} from "./Bathroom";
import {Room} from "./Room";
import {City} from "./City";

export class CreateFlat {
  public street: Street;
  public city: City;
  public bathroom: Bathroom;
  public room: Room;
  public numberFlat: string;
  public area: number;

  constructor(street: Street, city: City, bathroom: Bathroom, room: Room, numberFlat: string, area: number) {
    this.street = street;
    this.city = city;
    this.bathroom = bathroom;
    this.room = room;
    this.numberFlat = numberFlat;
    this.area = area;
  }
}
