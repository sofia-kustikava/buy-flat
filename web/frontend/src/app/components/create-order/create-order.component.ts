import {Component, OnInit} from '@angular/core';
import {CreateOrder} from "../../dto/CreateOrder";
import {OrdersService} from "../../services/orders.service";
import {BathroomService} from "../../services/bathroom.service";
import {Bathroom} from "../../dto/Bathroom";
import {StreetService} from "../../services/street.service";
import {CityService} from "../../services/city.service";
import {RoomService} from "../../services/room.service";
import {Street} from "../../dto/Street";
import {City} from "../../dto/City";
import {Room} from "../../dto/Room";
import {CreateFlat} from "../../dto/CreateFlat";
import {Region} from "../../dto/Region";
import {RegionService} from "../../services/region.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
  createOrder: CreateOrder = {} as CreateOrder;
  createFlat: CreateFlat = {} as CreateFlat;
  bathroom: Bathroom = {} as Bathroom;
  street: Street = {} as Street;
  city: City = {} as City;
  room: Room = {} as Room;
  region: Region = {} as Region;
  bathrooms: Bathroom[];
  regions: Region[];
  streets: Street[];
  cities: City[];
  rooms: Room[];

  constructor(private ordersService: OrdersService,
              private bathroomService: BathroomService,
              private streetService: StreetService,
              private cityService: CityService,
              private regionService: RegionService,
              private roomService: RoomService,
              public router: Router
  ) {
  }

  ngOnInit(): void {
    this.bathroomService.getBathrooms().subscribe(bathrooms => this.bathrooms = bathrooms);
    this.cityService.getCities().subscribe(cities => this.cities = cities);
    this.roomService.getRooms().subscribe(rooms => this.rooms = rooms);
  }

  create() {
    this.createFlat.street = this.street;
    this.createFlat.city = this.city;
    this.createFlat.bathroom = this.bathroom;
    this.createFlat.room = this.room;
    this.createOrder.flat = this.createFlat;
    this.ordersService.create(this.createOrder).subscribe();
    this.router.navigate(['orders'])
  }

  setCity(city: City) {
    this.city = city;
    this.regionService.getRegionsByCity(city).subscribe(regions => this.regions = regions);
  }

  setRegion(region: Region) {
    this.region = region;
    this.streetService.getStreetsByRegion(region).subscribe(streets => this.streets = streets);
  }

  setBathroom(bathroom: Bathroom) {
    this.bathroom = bathroom;
  }

  setStreet(street: Street) {
    this.street = street;
  }

  setRoom(room: Room) {
    this.room = room;
  }

}
