import { HealthResponse } from "../../contracts";

export const mockHealthResponse = (
  defaults?: Partial<HealthResponse>
): HealthResponse => {
  return {
    service: defaults.service ?? "Customer",
    status: defaults.status ?? "Healthy"
  };
};
