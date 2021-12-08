import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SERVER_PATH} from '../../globals';
import {Observable} from 'rxjs';
import {RegisterUser} from "../dto/RegisterUser";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) {
  }

  register(registerUser: RegisterUser): Observable<string> {
    return this.http.post<string>(SERVER_PATH + '/registration', registerUser, {responseType: 'text' as 'json'});
  }
}
