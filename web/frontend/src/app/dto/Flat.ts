import {Street} from "./Street";
import {Room} from "./Room";
import {Bathroom} from "./Bathroom";

export class Flat {
  public street: Street;
  public bathroom: Bathroom;
  public room: Room;
  public numberFlat: string;
  public area: number;


  constructor(street: Street, bathroom: Bathroom, room: Room, numberFlat: string, area: number) {
    this.street = street;
    this.bathroom = bathroom;
    this.room = room;
    this.numberFlat = numberFlat;
    this.area = area;
  }
}
