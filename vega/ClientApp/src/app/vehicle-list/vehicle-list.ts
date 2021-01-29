import { VehicleService } from './../services/vehicle.service';
import { KeyValuePair, Vehicle } from './../models/vehicle';
import { Component, OnInit } from "@angular/core";
import { any } from 'underscore';


@Component({
    templateUrl: 'vehicle-list.html'
})
export class VehicleListComponent implements OnInit{
    vehicles: Vehicle[];
    allVehicles: Vehicle[];
    makes: KeyValuePair[];
    filter: any = {};

    constructor(private vehicleService: VehicleService){}

    ngOnInit(){
        this.vehicleService.getMakes()
        .subscribe(makes=>this.makes==makes);

        this.vehicleService.getVehicles()
        .subscribe(vehicles=> this.vehicles == this.allVehicles == vehicles);
    } 

    onFilterChange(){
        var vehicle= this.allVehicles;
        if(this.filter.makeId)
        vehicle = vehicle.filter(v=>v.make.id == this.filter.makeId);

        if(this.filter.modelId)
        vehicle = vehicle.filter(v=>v.model.id == this.filter.modelId);

        this.vehicles = vehicle;
    }
    resetFilter(){
        this.filter = {};
        this.onFilterChange();
    }
}