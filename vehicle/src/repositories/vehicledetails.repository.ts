import {DefaultCrudRepository} from '@loopback/repository';
import {Vehicledetails, VehicledetailsRelations} from '../models';
import {VehicledetailsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class VehicledetailsRepository extends DefaultCrudRepository<
  Vehicledetails,
  typeof Vehicledetails.prototype.id,
  VehicledetailsRelations
> {
  constructor(
    @inject('datasources.vehicledetails') dataSource: VehicledetailsDataSource,
  ) {
    super(Vehicledetails, dataSource);
  }
}
