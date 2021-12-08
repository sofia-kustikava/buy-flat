import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../dto/User';
import {AuthResponse} from "../dto/AuthResponse";
import {AuthUser} from "../dto/AuthUser";
import {SERVER_PATH} from "../../globals";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  authenticate(authUser: AuthUser): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(SERVER_PATH + '/auth', authUser);
  }

  validate(): Observable<User> {
    return this.http.post<User>(SERVER_PATH + '/auth/autologin', null, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    });
  }

}
