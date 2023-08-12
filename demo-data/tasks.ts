import { Task } from "@/types";

export const tasks: Task[] = [
  {
    id: "1",
    title: "Blender",
    description: "make a render",
    type: "random",
    duration: { amount: 1, unit: "h" },
    // status: "active",
    createdAt: new Date(),
  },
  {
    id: "2",
    title: "Fitness",
    description: "small workouts",
    times: 4,
    type: "daily",
    status: "active",
    duration: { amount: 15, unit: "m" },
    completedDurationInMs: 1000 * 60 * 10, // 10 mins progress in current repetition/time
    completedTimes: 2, // 2 times completed
    createdAt: new Date(),
  },
];
