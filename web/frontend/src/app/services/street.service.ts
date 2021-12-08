import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SERVER_PATH} from "../../globals";
import {Street} from "../dto/Street";
import {Region} from "../dto/Region";

@Injectable({
  providedIn: 'root'
})
export class StreetService {

  constructor(private http: HttpClient) {
  }

  getStreets(): Observable<Street[]> {
    return this.http.get<Street[]>(SERVER_PATH + '/street', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    });
  }

  getStreetsByRegion(region: Region): Observable<Street[]> {
    return this.http.get<Street[]>(SERVER_PATH + '/street/' + region.id, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    });
  }
}
