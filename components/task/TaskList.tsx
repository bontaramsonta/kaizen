import React from "react";
import type { Task as TaskType } from "@/types";
import Task from "@/components/task/Task";
//! demo
import { tasks } from "@/demo-data/tasks";

export default function TaskList() {
  return (
    <ul className="flex w-full flex-col space-y-4">
      {tasks.map((task) => (
        <Task key={task.id} data={task as TaskType} />
      ))}
    </ul>
  );
}
