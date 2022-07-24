import { ILoggerService, LoggerService, LogLevel } from "common";
import { mockHealthResponse } from "common/mocks/contracts";
import { MockProxy, mock } from "jest-mock-extended";
import { HealthController, IHealthController } from "./controller";
import { IHealthService } from "./service";

describe("HealthController", () => {
  const logger: ILoggerService = new LoggerService(LogLevel.Trace);

  let healthService: MockProxy<IHealthService>;
  let healthController: IHealthController;
  beforeEach(() => {
    healthService = mock<IHealthService>();
    healthController = new HealthController(logger, healthService);
  });

  describe("getHealth", () => {
    const healthResponse = mockHealthResponse({
      service: "Customer"
    });

    beforeEach(() => {
      healthService.getHealth.mockReturnValue(healthResponse);
    });

    it("should return a healthy response", () => {
      const response = healthController.getHealth();

      expect(response).toEqual(healthResponse);
      expect(healthService.getHealth).toHaveBeenCalledTimes(1);
    });
  });
});
