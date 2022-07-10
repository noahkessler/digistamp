import { ILoggerService, LoggerService } from "common";
import { inject, injectable } from "inversify";
import { HealthResponse } from "./contracts";

export interface IHealthService {
  getHealth(): HealthResponse;
}

@injectable()
export class HealthService implements IHealthService {
  constructor(@inject(LoggerService) private logger: ILoggerService) {}

  getHealth(): HealthResponse {
    this.logger.trace("getHealth", null, this.constructor.name);

    return {
      status: "Healthy"
    };
  }
}
