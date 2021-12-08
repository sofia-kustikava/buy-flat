import {City} from "./City";

export class Region {
  public id: number;
  public regionName: string;
  public city: City;

  constructor(id: number, regionName: string, city: City) {
    this.regionName = regionName;
    this.id = id;
    this.city = city;
  }
}
