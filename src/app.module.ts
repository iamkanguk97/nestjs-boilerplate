import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './apis/users/user.module';
import { TypeOrmConfigService } from './database/typeorm-config.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
