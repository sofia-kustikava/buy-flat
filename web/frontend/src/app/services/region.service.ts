import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SERVER_PATH} from "../../globals";
import {Region} from "../dto/Region";
import {City} from "../dto/City";

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor(private http: HttpClient) {
  }

  getRegions(): Observable<Region[]> {
    return this.http.get<Region[]>(SERVER_PATH + '/region', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    });
  }

  getRegionsByCity(city: City): Observable<Region[]> {
    return this.http.get<Region[]>(SERVER_PATH + '/region/' + city.id, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    });
  }
}
