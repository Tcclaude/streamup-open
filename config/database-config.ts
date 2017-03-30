export interface DatabaseConfig {
  database: string;
  dialect: string;
  logging: boolean | Function;
  force: boolean;
  timezone: string;
}

export const databaseConfig: DatabaseConfig = {
  database: 'proof-concept',
  dialect: 'sqlite',
  logging: true,
  force: true,
  timezone: '+00:00'
// tslint:disable-next-line:eofline
};