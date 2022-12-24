import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {SanciprianoDataSource} from '../datasources';
import {Taquillero, TaquilleroRelations} from '../models';

export class TaquilleroRepository extends DefaultCrudRepository<
  Taquillero,
  typeof Taquillero.prototype.idtaqui,
  TaquilleroRelations
> {
  constructor(
    @inject('datasources.sancipriano') dataSource: SanciprianoDataSource,
  ) {
    super(Taquillero, dataSource);
  }
}
