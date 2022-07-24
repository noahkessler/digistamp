export interface HealthResponse {
  status: "Healthy" | "Degraded" | "Unhealthy";
  service: "Merchant" | "Customer";
}
