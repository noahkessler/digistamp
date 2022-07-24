import "reflect-metadata";
import { ILoggerService, LoggerService, LogLevel } from "common";
import { Container } from "inversify";
import {
  HealthController,
  HealthService,
  IHealthController,
  IHealthService
} from "../health";
import { keys } from "./keys";

const container: Container = new Container();

// Define environemnt
const envConfig = Object.freeze({
  logLevel: (process.env.LogLevel ?? LogLevel.Trace) as LogLevel
});

// Bind environment config
container.bind<typeof envConfig>(keys.envConfig).toConstantValue(envConfig);

// Common Services
container
  .bind<ILoggerService>(LoggerService)
  .toConstantValue(new LoggerService(envConfig.logLevel));

// Health
container.bind<IHealthController>(keys.IHealthController).to(HealthController);
container.bind<IHealthService>(keys.IHealthService).to(HealthService);

export { container };
