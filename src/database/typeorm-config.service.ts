import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { User } from 'src/apis/users/models/user';
import databaseConfig from './config/database.config';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(@Inject(databaseConfig.KEY) private readonly config: ConfigType<typeof databaseConfig>) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    const { host } = this.config;

    return {
      // type: 'mysql',
      host,
      port: 3306,
      username: 'root',
      password: 'hellopassword2',
      database: 'nestjs-boilerplate-db2',
      entities: [User],
    };
  }
}
