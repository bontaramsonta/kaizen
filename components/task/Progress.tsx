import React from "react";
import dayjs from "@/lib/dayjs";
import type { Task as TaskType } from "@/types";

function elapsedDurationInPercent(
  completedDurationInMs: number,
  duration: TaskType["duration"],
) {
  const durationInMs = dayjs
    .duration(duration?.amount as number, duration?.unit)
    .asMilliseconds();
  const percent = Math.min(100, (completedDurationInMs / durationInMs) * 100);
  return `${percent}%`;
}

export default function Progress({
  times = 1,
  completedTimes = 0,
  duration,
  completedDurationInMs = 0,
}: Pick<
  TaskType,
  "times" | "completedTimes" | "duration" | "completedDurationInMs"
>) {
  return (
    <div className="flex space-x-1">
      {duration &&
        Array(times)
          .fill(0)
          .map((_, index) => {
            // for completed times
            if (completedTimes > index)
              return (
                <div
                  key={index}
                  className="h-4 w-full rounded-full bg-green-500"
                ></div>
              );
            // for current time
            if (completedTimes === index) {
              return (
                <div
                  key={index}
                  className="relative h-4 w-full rounded-full bg-slate-200"
                >
                  <div
                    style={{
                      width: elapsedDurationInPercent(
                        completedDurationInMs,
                        duration,
                      ),
                    }}
                    className="absolute h-4 rounded-full bg-green-500"
                  ></div>
                </div>
              );
            }
            // for future times
            else {
              return (
                <div
                  key={index}
                  className="h-4 w-full rounded-full bg-slate-200"
                ></div>
              );
            }
          })}
    </div>
  );
}
