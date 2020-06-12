import {Entity, model, property} from '@loopback/repository';

@model()
export class Vehicledetails extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  vehicle_company?: string;

  @property({
    type: 'string',
  })
  vehicle_model?: string;

  @property({
    type: 'number',
  })
  vehicle_number?: number;

  @property({
    type: 'string',
  })
  vehicle_colour?: string;


  constructor(data?: Partial<Vehicledetails>) {
    super(data);
  }
}

export interface VehicledetailsRelations {
  // describe navigational properties here
}

export type VehicledetailsWithRelations = Vehicledetails & VehicledetailsRelations;
