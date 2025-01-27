import { config } from 'dotenv';
import { DataSource } from 'typeorm';

config({ path: '.env' });

export default new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number.parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [`dist/**/*.entity{.ts,.js}`],
  migrations: [`migrations/*{.ts,.js}`],
});
