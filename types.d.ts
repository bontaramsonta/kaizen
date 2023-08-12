export type Task = {
  id: string;
  title: string;
  description: string;
  type?: "daily" | "weekly" | "random";
  duration?: { amount: number; unit: "s" | "m" | "h" };
  completedDurationInMs?: number;
  times?: number;
  completedTimes?: number;
  status?: "active" | "completed" | "paused";
  createdAt?: Date;
  updatedAt?: Date;
};
