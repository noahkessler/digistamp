import { LogLevel } from "../../models";

export interface ILoggerService {
  setCorrelationId(correlationId: string): void;

  trace(message: string, data?: object, location?: string): void;
  debug(message: string, data?: object, location?: string): void;
  info(message: string, data?: object, location?: string): void;
  warn(message: string, data?: object, location?: string): void;
  error(message: string, data?: object, location?: string): void;
}

export class LoggerService implements ILoggerService {
  private correlationId?: string;

  constructor(private logLevel: LogLevel) {}

  setCorrelationId(correlationId: string): void {
    this.correlationId = correlationId;
  }

  trace(message: string, data?: object, location?: string): void {
    if (this.logLevel < LogLevel.Trace) return;
    console.trace(message, data, {
      location,
      timestamp: new Date().toDateString(),
      correlationId: this.correlationId
    });
  }

  debug(message: string, data?: object, location?: string): void {
    if (this.logLevel < LogLevel.Debug) return;
    console.debug(message, data, {
      location,
      timestamp: new Date().toDateString(),
      correlationId: this.correlationId
    });
  }

  info(message: string, data?: object, location?: string): void {
    if (this.logLevel < LogLevel.Info) return;
    console.info(message, data, {
      location,
      timestamp: new Date().toDateString(),
      correlationId: this.correlationId
    });
  }

  warn(message: string, data?: object, location?: string): void {
    if (this.logLevel < LogLevel.Warn) return;
    console.warn(message, data, {
      location,
      timestamp: new Date().toDateString(),
      correlationId: this.correlationId
    });
  }

  error(message: string, data?: object, location?: string): void {
    if (this.logLevel < LogLevel.Error) return;
    console.error(message, data, {
      location,
      timestamp: new Date().toDateString(),
      correlationId: this.correlationId
    });
  }
}
