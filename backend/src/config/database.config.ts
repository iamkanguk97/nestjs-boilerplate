import { Config } from './config.type';
import { registerAs } from '@nestjs/config';
import { IsBoolean, IsInt, IsOptional, IsString, Max, Min, ValidateIf } from 'class-validator';
import { UserEntity } from 'src/modules/user/entities/user.entity';
import { ConfigUtil } from 'src/utils/config.util';

class DatabaseEnvironmentVariableValidator {
  @ValidateIf((value) => value.DATABASE_URL)
  @IsString()
  DATABASE_URL!: string;

  @ValidateIf((value) => !value.DATABASE_URL)
  @IsString()
  @IsOptional()
  DATABASE_TYPE?: string;

  @ValidateIf((value) => !value.DATABASE_URL)
  @IsString()
  DATABASE_HOST!: string;

  @ValidateIf((value) => !value.DATABASE_URL)
  @Max(65535)
  @Min(0)
  @IsInt()
  @IsOptional()
  DATABASE_PORT?: number;

  @ValidateIf((value) => !value.DATABASE_URL)
  @IsString()
  DATABASE_PASSWORD!: string;

  @ValidateIf((value) => !value.DATABASE_URL)
  @IsString()
  DATABASE_NAME!: string;

  @ValidateIf((value) => !value.DATABASE_URL)
  @IsString()
  DATABASE_USERNAME!: string;

  @IsBoolean()
  @IsOptional()
  DATABASE_SYNCHRONIZE?: boolean;
}

export default registerAs<Config.IDatabase>('database', () => {
  ConfigUtil.validateConfig(process.env, DatabaseEnvironmentVariableValidator);

  return {
    type: 'mysql',
    url: process.env.DATABASE_URL,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT ? parseInt(process.env.DATABASE_PORT, 10) : 3306,
    password: process.env.DATABASE_PASSWORD,
    name: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USERNAME,
    synchronize: process.env.DATABASE_SYNCHRONIZE === 'true',
    logging: process.env.NODE_ENV !== 'production',
    entities: [UserEntity],
  };
});
