import { ILoggerService, LoggerService } from "common";
import { HealthResponse } from "common/contracts";
import { inject, injectable } from "inversify";

export interface IHealthService {
  getHealth(): HealthResponse;
}

@injectable()
export class HealthService implements IHealthService {
  constructor(@inject(LoggerService) private logger: ILoggerService) {}

  getHealth(): HealthResponse {
    this.logger.trace("getHealth", null, this.constructor.name);

    return {
      status: "Healthy",
      service: "Customer"
    };
  }
}
