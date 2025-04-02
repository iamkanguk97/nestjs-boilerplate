import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { IConfig } from 'src/config/config.type';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService<IConfig>) {}

  /**
   * Create TypeORM Options
   *
   * @author Jason
   */
  public createTypeOrmOptions(): TypeOrmModuleOptions {
    const databaseConfig = this.configService.getOrThrow('database', { infer: true });
    const { type, host, port, username, password, database, synchronize } = databaseConfig;

    return {
      type,
      host,
      port,
      username,
      password,
      synchronize,
      database,
      migrationsTableName: 'migration',
      migrations: ['src/database/migrations/*.{.ts,.js}'],
    };
  }
}
