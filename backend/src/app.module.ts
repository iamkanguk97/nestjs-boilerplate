import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './apis/user/user.module';
import { DataSource, DataSourceOptions } from 'typeorm';
import { TypeOrmConfigService } from './database/typeorm-config.service';
import { ConfigModule } from '@nestjs/config';
import databaseConfig from './config/database.config';
import { AuthModule } from './apis/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
      dataSourceFactory: async (options?: DataSourceOptions) => {
        if (!options) {
          throw new Error('DataSource option is undefined!');
        }
        return await new DataSource(options).initialize();
      },
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
      load: [databaseConfig],
    }),
    UserModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
