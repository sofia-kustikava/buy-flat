import {UserType} from "./UserType";

export class User {
  public id: number;
  public firstName: string;
  public middleName: string;
  public lastName: string;
  public email: string;
  public age: number;
  public type: UserType;

  constructor(id: number, userType: UserType, firstName: string, middleName: string, lastName: string, email: string, age: number) {
    this.id = id;
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.type = userType;
  }
}
