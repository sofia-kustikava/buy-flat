import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {City} from "../dto/City";
import {SERVER_PATH} from "../../globals";

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http: HttpClient) {
  }

  getCities(): Observable<City[]> {
    return this.http.get<City[]>(SERVER_PATH + '/city', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    });

  }
}
