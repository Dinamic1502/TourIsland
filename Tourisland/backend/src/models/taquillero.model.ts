import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Taquillero extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  idtaqui?: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  nombres: string;

  @property({
    type: 'string',
    required: true,
  })
  apellidos: string;

  @property({
    type: 'string',
    required: true,
  })
  identificacion: string;

  @property({
    type: 'string',
    required: true,
  })
  contrasena: string;

  @property({
    type: 'string',
    required: true,
  })
  confircontrasena: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Taquillero>) {
    super(data);
  }
}

export interface TaquilleroRelations {
  // describe navigational properties here
}

export type TaquilleroWithRelations = Taquillero & TaquilleroRelations;
