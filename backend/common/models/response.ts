import { APIGatewayProxyResult } from "aws-lambda";
import { ErrorCode } from "./errors";

export interface IResponse {
  toResponse(): APIGatewayProxyResult;
}

export class SuccessResponse implements IResponse {
  constructor(private body?: unknown) {}

  toResponse(): APIGatewayProxyResult {
    return {
      statusCode: 200,
      body: JSON.stringify(this.body ?? "")
    };
  }
}

export class ErrorResponse extends Error implements IResponse {
  constructor(
    private statusCode: number,
    private errorCode: ErrorCode,
    message: string
  ) {
    super(message);
  }

  toResponse(): APIGatewayProxyResult {
    return {
      statusCode: this.statusCode,
      body: JSON.stringify({
        code: this.errorCode,
        message: this.message
      })
    };
  }
}
