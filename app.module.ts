import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent, VehicleModel } from './app.component';
import {FormsModule} from '@angular/forms'
import { VehicleService } from './service/vehicle.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [VehicleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
