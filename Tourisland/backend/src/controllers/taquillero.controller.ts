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
  response,
} from '@loopback/rest';
import {Taquillero} from '../models';
import {TaquilleroRepository} from '../repositories';

export class TaquilleroController {
  constructor(
    @repository(TaquilleroRepository)
    public taquilleroRepository : TaquilleroRepository,
  ) {}

  @post('/taquilleros')
  @response(200, {
    description: 'Taquillero model instance',
    content: {'application/json': {schema: getModelSchemaRef(Taquillero)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Taquillero, {
            title: 'NewTaquillero',
            exclude: ['id'],
          }),
        },
      },
    })
    taquillero: Omit<Taquillero, 'id'>,
  ): Promise<Taquillero> {
    return this.taquilleroRepository.create(taquillero);
  }

  @get('/taquilleros/count')
  @response(200, {
    description: 'Taquillero model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Taquillero) where?: Where<Taquillero>,
  ): Promise<Count> {
    return this.taquilleroRepository.count(where);
  }

  @get('/taquilleros')
  @response(200, {
    description: 'Array of Taquillero model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Taquillero, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Taquillero) filter?: Filter<Taquillero>,
  ): Promise<Taquillero[]> {
    return this.taquilleroRepository.find(filter);
  }

  @patch('/taquilleros')
  @response(200, {
    description: 'Taquillero PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Taquillero, {partial: true}),
        },
      },
    })
    taquillero: Taquillero,
    @param.where(Taquillero) where?: Where<Taquillero>,
  ): Promise<Count> {
    return this.taquilleroRepository.updateAll(taquillero, where);
  }

  @get('/taquilleros/{id}')
  @response(200, {
    description: 'Taquillero model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Taquillero, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Taquillero, {exclude: 'where'}) filter?: FilterExcludingWhere<Taquillero>
  ): Promise<Taquillero> {
    return this.taquilleroRepository.findById(id, filter);
  }

  @patch('/taquilleros/{id}')
  @response(204, {
    description: 'Taquillero PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Taquillero, {partial: true}),
        },
      },
    })
    taquillero: Taquillero,
  ): Promise<void> {
    await this.taquilleroRepository.updateById(id, taquillero);
  }

  @put('/taquilleros/{id}')
  @response(204, {
    description: 'Taquillero PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() taquillero: Taquillero,
  ): Promise<void> {
    await this.taquilleroRepository.replaceById(id, taquillero);
  }

  @del('/taquilleros/{id}')
  @response(204, {
    description: 'Taquillero DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.taquilleroRepository.deleteById(id);
  }
}
