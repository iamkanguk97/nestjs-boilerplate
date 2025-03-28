import { registerAs } from '@nestjs/config';
import { IsBoolean, IsOptional, IsString, ValidateIf } from 'class-validator';
import validateConfig from 'src/utils/validate-config.util';
import getEnvironmentVal from 'src/config/utils/get-environment-variable.util';
import { IDatabaseConfig } from './database-config.type';

class DatabaseEnvironmentVariableValidator {
  @IsString()
  @IsOptional()
  DATABASE_URL?: string;

  @ValidateIf((value) => !value.DATABASE_HOST)
  @IsString()
  DATABASE_HOST!: string;

  @IsBoolean()
  @IsOptional()
  DATABASE_SYNC!: boolean;
}

export default registerAs<IDatabaseConfig>('database', () => {
  validateConfig(process.env, DatabaseEnvironmentVariableValidator);

  return {
    type: 'mysql',
    host: getEnvironmentVal('DATABASE_HOST'),
    port: +getEnvironmentVal('DATABASE_PORT'),
    username: getEnvironmentVal('DATABASE_USERNAME'),
    password: getEnvironmentVal('DATABASE_PASSWORD'),
    database: getEnvironmentVal('DATABASE_NAME'),
    synchronize: getEnvironmentVal('DATABASE_SYNC') === 'true',
  };
});
