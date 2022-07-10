import { ErrorResponse } from "../response";
import { ErrorCode } from "./errorCodes";

export class UnauthorizedError extends ErrorResponse {
  constructor(errorCode: ErrorCode, message: string) {
    super(401, errorCode, message);
  }
}
