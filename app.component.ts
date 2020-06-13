import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VehicleService } from './service/vehicle.service';
export class VehicleModel{
  id: Number;
  vehicle_company: string;
  vehicle_model: string;
  vehicle_number: Number;
  vehicle_colour: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  vehicleList : VehicleModel[]= [];

  isEdit: boolean = false;
  constructor(private VehicleService: VehicleService){}
  vehicle: VehicleModel = new VehicleModel();
   onSubmit(form:NgForm):void
{
if(!this.isEdit)
{
  console.log(form.value);
  delete form.value.id;
  this.VehicleService.create(form.value)
  .subscribe(resp =>{
    console.log(resp);
    form.resetForm();
    this.getAll();
  }) 
}
else
{
  console.log(form.value);
  this.VehicleService.update(form.value)
  .subscribe(resp =>{
    form.resetForm();
    this.isEdit = false;
    this.getAll();
  }) 
}


}

  
getAll():void 
{
  this.VehicleService.GetAll()
  .subscribe(resp =>{
    console.log(resp);
    this.vehicleList = resp;
  })
  
}
edit(data:VehicleModel):void
{
  
  this.isEdit=true;
  this.VehicleService.GetOne(data.id)
  .subscribe(resp =>{
    this.vehicle = resp;
  })
}

delete(data:VehicleModel):void{
  
  this.VehicleService.Delete(data.id)
  .subscribe(resp =>{
    this.getAll();
  })
}
ngOnInit():void{
  this.getAll();
}
}
