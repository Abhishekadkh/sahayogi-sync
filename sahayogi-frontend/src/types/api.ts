export interface Household {
  id: number;
  name: string;
  flood_risk: number;
  family_size: number;
  priorityScore: number;
  allocated: string; // "Standard Relief Kit" or "None"
  connections?: number;
}

export interface Metrics {
  total_households: number;
  total_served: number;
  efficiency_percentage: number;
}

export interface AllocationResponse {
  metrics: Metrics;
  allocations: Household[];
}

export interface LoginResponse {
  status: string;
  token?: string;
  error?: string;
}
