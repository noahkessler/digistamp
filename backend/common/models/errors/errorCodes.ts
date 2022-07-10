/**
 * Errors within the range
 * 400 - 499
 */
export enum ClientErrorCode {
  Unauthorized = "Unauthorized",
  BadRequest = "BadRequest",
  Forbidden = "Forbidden"
}

/**
 * Errors >= 500
 */
export enum ServerErrorCode {
  Unknown = 0
}

export type ErrorCode = ClientErrorCode | ServerErrorCode;
