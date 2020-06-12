import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Vehicledetails} from '../models';
import {VehicledetailsRepository} from '../repositories';

export class VehiclemasterController {
  constructor(
    @repository(VehicledetailsRepository)
    public vehicledetailsRepository : VehicledetailsRepository,
  ) {}

  @post('/vehicledetails', {
    responses: {
      '200': {
        description: 'Vehicledetails model instance',
        content: {'application/json': {schema: getModelSchemaRef(Vehicledetails)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Vehicledetails, {
            title: 'NewVehicledetails',
            exclude: ['id'],
          }),
        },
      },
    })
    vehicledetails: Omit<Vehicledetails, 'id'>,
  ): Promise<Vehicledetails> {
    return this.vehicledetailsRepository.create(vehicledetails);
  }

  @get('/vehicledetails/count', {
    responses: {
      '200': {
        description: 'Vehicledetails model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Vehicledetails) where?: Where<Vehicledetails>,
  ): Promise<Count> {
    return this.vehicledetailsRepository.count(where);
  }

  @get('/vehicledetails', {
    responses: {
      '200': {
        description: 'Array of Vehicledetails model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Vehicledetails, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Vehicledetails) filter?: Filter<Vehicledetails>,
  ): Promise<Vehicledetails[]> {
    return this.vehicledetailsRepository.find(filter);
  }

  @patch('/vehicledetails', {
    responses: {
      '200': {
        description: 'Vehicledetails PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Vehicledetails, {partial: true}),
        },
      },
    })
    vehicledetails: Vehicledetails,
    @param.where(Vehicledetails) where?: Where<Vehicledetails>,
  ): Promise<Count> {
    return this.vehicledetailsRepository.updateAll(vehicledetails, where);
  }

  @get('/vehicledetails/{id}', {
    responses: {
      '200': {
        description: 'Vehicledetails model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Vehicledetails, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Vehicledetails, {exclude: 'where'}) filter?: FilterExcludingWhere<Vehicledetails>
  ): Promise<Vehicledetails> {
    return this.vehicledetailsRepository.findById(id, filter);
  }

  @patch('/vehicledetails/{id}', {
    responses: {
      '204': {
        description: 'Vehicledetails PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Vehicledetails, {partial: true}),
        },
      },
    })
    vehicledetails: Vehicledetails,
  ): Promise<void> {
    await this.vehicledetailsRepository.updateById(id, vehicledetails);
  }

  @put('/vehicledetails/{id}', {
    responses: {
      '204': {
        description: 'Vehicledetails PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() vehicledetails: Vehicledetails,
  ): Promise<void> {
    await this.vehicledetailsRepository.replaceById(id, vehicledetails);
  }

  @del('/vehicledetails/{id}', {
    responses: {
      '204': {
        description: 'Vehicledetails DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.vehicledetailsRepository.deleteById(id);
  }
}
