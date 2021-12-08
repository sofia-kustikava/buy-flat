import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Bathroom} from "../dto/Bathroom";
import {SERVER_PATH} from "../../globals";

@Injectable({
  providedIn: 'root'
})
export class BathroomService {

  constructor(private http: HttpClient) {
  }

  getBathrooms(): Observable<Bathroom[]> {
    return this.http.get<Bathroom[]>(SERVER_PATH + '/bathroom', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    });
  }
}

