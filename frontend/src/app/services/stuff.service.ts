import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Stuff } from "../models/stuff";

@Injectable({
  providedIn: 'root'
})
export class StuffService {

  URL_API_Stuffs = 'http://localhost:6006/api/stuffs/';
  URL_API_Movements = 'http://localhost:6006/api/stuffs/movements/1';

  //Variable donde se almacenan los datos obtenidos en arreglo para trabajarlos
  stuffSelected: Stuff;
  stuffs: Stuff[] = [];


  constructor(private http: HttpClient) {
    this.stuffSelected = new Stuff();
  }

  getStuffs() {
    return this.http.get<Stuff[]>(this.URL_API_Stuffs);
  }

  getStuff(name: string) {
    console.log(this.URL_API_Stuffs + `name/${name}`);
    return this.http.get<Stuff[]>(this.URL_API_Stuffs + `name/${name}`);
  }

  postStuffs(stuff: Stuff) {
    return this.http.post(this.URL_API_Stuffs, stuff);
  }

  putStuffs(stuff: Stuff) {
    return this.http.put(this.URL_API_Stuffs + `/${stuff.id}`, stuff);
  }

  deleteStuffs(id: string) {
    return this.http.delete(this.URL_API_Stuffs + `/${id}`);
  }

  mostrarInformacion(id: string) {
    console.log(this.URL_API_Stuffs + `movements/${id}`);
    return this.http.get<Stuff[]>(this.URL_API_Stuffs + `movements/${id}`);
  }
}