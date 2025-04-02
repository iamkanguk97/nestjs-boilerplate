import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config();

const dataSource = new DataSource({
  type: 'mysql',
  url: process.env.DATABASE_URL,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT ? parseInt(process.env.DATABASE_PORT, 10) : 3306,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USERNAME,
  synchronize: false,
  logging: process.env.NODE_ENV !== 'production',
  entities: [path.join(__dirname, '../apis/**/*.entity.ts')],
  migrations: [path.join(__dirname, 'migrations/*.ts')],
  migrationsTableName: 'migrations',
});

export default dataSource;
