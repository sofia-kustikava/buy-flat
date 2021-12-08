import {User} from "./User";

export class Client {
  public passport: string;
  public user: User;

  constructor(passport: string, user: User) {
    this.passport = passport;
    this.user = user;
  }
}
