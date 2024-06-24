import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { Profile } from './src/entitys/profile.entity';

dotenv.config();

const config: TypeOrmModuleOptions = {
  type: "mysql",
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT, 10),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [Profile],
  synchronize: true,
};

export default config;