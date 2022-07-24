import "source-map-support";
import { APIGatewayProxyHandler } from "aws-lambda";
import {
  ILoggerService,
  LoggerService,
  SuccessResponse,
  InternalServerError
} from "common";
import { keys } from "../config/keys";
import { container } from "../config/container";
import { IHealthController } from "../health";

const logger = container.get<ILoggerService>(LoggerService);
const healthController = container.get<IHealthController>(
  keys.IHealthController
);

export const handler: APIGatewayProxyHandler = async (event) => {
  logger.setCorrelationId(event.requestContext.requestId);
  logger.info("getHealth handler called");
  logger.trace("getHealth event", event);

  try {
    const result = healthController.getHealth();
    return new SuccessResponse(result).toResponse();
  } catch (error) {
    logger.error("getHealth handler failed", error);
    return new InternalServerError().toResponse();
  }
};
