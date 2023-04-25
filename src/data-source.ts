import path from "path";
import { DataSource, DataSourceOptions } from "typeorm";
import "dotenv/config";
export const DataSourceConfig = (): DataSourceOptions => {
  const entitiesPath = path.join(__dirname, "entities/**.{js,ts}");
  const migrationsPath = path.join(__dirname, "migrations/**.{js,ts}");
  if (!process.env.DATABASE_URL) {
    throw new Error("Env var DATABASE_URL does not exists");
  }
  if (process.env.NODE_ENV === "test") {
    return {
      type: "sqlite",
      database: ":memory:",
      synchronize: true,
      entities: [entitiesPath],
    };
  }
  return {
    type: "postgres",
    url: process.env.DATABASE_URL,
    synchronize: false,
    logging: true,
    entities: [entitiesPath],
    migrations: [migrationsPath],
  };
};
export const AppDataSource: DataSource = new DataSource(DataSourceConfig());
