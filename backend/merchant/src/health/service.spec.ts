import { ILoggerService, LoggerService, LogLevel } from "common";
import { mockHealthResponse } from "common/mocks/contracts";
import { HealthService, IHealthService } from "./service";

describe("HealthService", () => {
  const logger: ILoggerService = new LoggerService(LogLevel.Trace);

  let healthService: IHealthService;
  beforeEach(() => {
    healthService = new HealthService(logger);
  });

  describe("getHealth", () => {
    const healthResponse = mockHealthResponse({
      service: "Merchant"
    });

    it("should return a valid health response", () => {
      const response = healthService.getHealth();

      expect(response).toEqual(healthResponse);
    });
  });
});
