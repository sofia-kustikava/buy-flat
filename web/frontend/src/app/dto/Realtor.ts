import {User} from "./User";

export class Realtor {
  public percent: number;
  public user: User;

  constructor(percent: number, user: User) {
    this.percent = percent;
    this.user = user;
  }
}
