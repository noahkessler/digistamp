import { ILoggerService, LoggerService } from "common";
import { HealthResponse } from "common/contracts";
import { inject, injectable } from "inversify";
import { Get, Route } from "tsoa";
import { keys } from "../config/keys";
import { IHealthService } from "./service";

export interface IHealthController {
  getHealth(): HealthResponse;
}

@injectable()
@Route("health")
export class HealthController implements IHealthController {
  constructor(
    @inject(LoggerService) private logger: ILoggerService,
    @inject(keys.IHealthService) private healthService: IHealthService
  ) {}

  @Get()
  getHealth(): HealthResponse {
    this.logger.trace("getHealth", null, this.constructor.name);
    return this.healthService.getHealth();
  }
}
