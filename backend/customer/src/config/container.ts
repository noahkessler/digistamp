import "reflect-metadata";
import { ILoggerService, LoggerService, LogLevel } from "common";
import { Container } from "inversify";
import { HealthController, IHealthController } from "../health";

const container: Container = new Container();

// Define keys and environemnt
const keys = {
  envConfig: Symbol.for("envConfig"),
  IHealthController: Symbol.for("IHealthController"),
  IHealthService: Symbol.for("IHealthService")
};
const envConfig = {
  logLevel: (process.env.LogLevel ?? LogLevel.Trace) as LogLevel
};

// Bind environment config
container.bind<typeof envConfig>(keys.envConfig).toConstantValue(envConfig);

// Common Services
container
  .bind<ILoggerService>(LoggerService)
  .toConstantValue(new LoggerService(envConfig.logLevel));

// Health
container
  .bind<IHealthController>(keys.IHealthController)
  .to(HealthController)
  .inSingletonScope();

export { container, keys, envConfig };
