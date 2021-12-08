import {Region} from "./Region";

export class Street {
  public id: number;
  public streetName: string;
  public region: Region;

  constructor(id: number, streetName: string, region: Region) {
    this.id = id;
    this.streetName = streetName;
    this.region = region;
  }
}
