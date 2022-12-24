import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {SanciprianoDataSource} from '../datasources';
import {Administrador, AdministradorRelations} from '../models';

export class AdministradorRepository extends DefaultCrudRepository<
  Administrador,
  typeof Administrador.prototype.idadmins,
  AdministradorRelations
> {
  constructor(
    @inject('datasources.sancipriano') dataSource: SanciprianoDataSource,
  ) {
    super(Administrador, dataSource);
  }
}
