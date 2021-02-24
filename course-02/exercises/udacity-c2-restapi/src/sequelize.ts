import {Sequelize} from 'sequelize-typescript';
import { config } from './config/config';

// Instantiate new Sequelize instance!
export const sequelize = new Sequelize({
  "username": config.postgres.username,
  "password": config.postgres.password,
  "database": config.postgres.database,
  "host": config.postgres.host,

  dialect: config.postgres.dialect,
  storage: ':memory:',
});

