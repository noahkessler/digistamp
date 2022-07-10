import { ErrorResponse } from "../response";
import { ErrorCode, ServerErrorCode } from "./errorCodes";

export class InternalServerError extends ErrorResponse {
  constructor(
    errorCode: ErrorCode = ServerErrorCode.Unknown,
    message = "Internal Server Error"
  ) {
    super(500, errorCode, message);
  }
}
