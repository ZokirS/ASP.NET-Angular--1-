import { Vehicle, SaveVehicle } from './../models/vehicle';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from  'rxjs/operators';
import {Observable} from 'rxjs';
//import 'rxjs/add/operator/map'

@Injectable()
export class VehicleService {
  private readonly vehiclesEndpoint = '/api/vehicles';

  constructor(private http: HttpClient) { }

  getMakes(){
    return this.http.get('/api/makes');
  }
  getFeatures(){
    return this.http.get('/api/vehicle/features');
  }
 create(vehicle){
   return this.http.post('/api/vehicles', vehicle).pipe(map((res: Response)=>res.json()));
 }
 getVehicle(id: number){
   return this.http.get('api/vehicles/'+ id)
  // .pipe(map((res: Response)=>res.json()));
 }
 update(vehicle: SaveVehicle){
   return this.http.put('/api/vehicles/'+ vehicle.id, vehicle)
   .pipe(map((res: Response)=>res.json()));
 }
 delete(id: number){
  return this.http.delete('/api/vehicles/' +id)
  // .pipe(map((res: Response)=>res.json()));
 }
 getVehicles() {
  return this.http.get('/api/vehicles');
}
}
