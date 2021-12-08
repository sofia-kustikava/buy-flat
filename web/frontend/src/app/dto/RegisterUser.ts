import {AuthUser} from "./AuthUser";

export interface RegisterUser {
  firstName: string;
  middleName: string;
  lastName: string;
  phone: string;
  age: number;
  email: string;
  password: string;
  type: string;
  percent: bigint;
  passport: string;
}
