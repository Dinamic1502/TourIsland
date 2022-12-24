import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'sancipriano',
  connector: 'mongodb',
  url: 'mongodb://root@127.0.0.1:27017/sancipriano',
  host: '127.0.0.1',
  port: 27017,
  user: 'root',
  password: '',
  database: 'sancipriano',
  useNewUrlParser: false
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class SanciprianoDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'sancipriano';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.sancipriano', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
