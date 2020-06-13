import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { VehicleModel } from '../app.component';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VehicleService {
private readonly URL: string = "http://localhost:3000/vehicledetails";
  constructor(private http: HttpClient) { }
  create(data: VehicleModel):Observable<VehicleModel>
  {
    return this.http.post<VehicleModel>(this.URL,data)
  }
  update(data: VehicleModel):Observable<VehicleModel>
  {
    return this.http.put<VehicleModel>(this.URL,data)
  }
  GetAll():Observable<VehicleModel[]>
  { 
    return this.http.get<VehicleModel[]>(this.URL);
  }
  GetOne(id: Number):Observable<VehicleModel>
  { 
    return this.http.get<VehicleModel>(this.URL + "/" +id);
  }
  Delete(id: Number):Observable<VehicleModel>
  { 
    return this.http.delete<VehicleModel>(this.URL + "/" +id);
  }
}
