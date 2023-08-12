import React from "react";
import { Card } from "@/components/ui/card";
import { Task } from "@/types";
import Progress from "@/components/task/Progress";
const durationUnitMap = {
  s: "seconds",
  m: "mins",
  h: "hours",
};

function convertDurationToString(duration: Task["duration"]): string {
  if (!duration) return "";
  return `${duration.amount} ${durationUnitMap[duration.unit]}`;
}

function JoinByDots({ segments }: { segments: (string | undefined)[] }) {
  return segments.filter(Boolean).map((segment, index) => {
    if (index === 0)
      return <React.Fragment key={index}>{segment}</React.Fragment>;
    return (
      <React.Fragment key={index}>
        <span className="font-normal"> • </span>
        {segment}
      </React.Fragment>
    );
  });
}

export default function Task({ data }: { data: Task }) {
  return (
    <Card key={data.id} className="flex flex-col space-y-2 rounded-xl p-3">
      <h2 className="font-medium">
        {data.title} <span className="font-normal"> | </span> {data.description}
      </h2>
      <p className="font-medium">
        <JoinByDots
          segments={[
            data.type !== "random" ? data.type : undefined,
            convertDurationToString(data.duration),
            data.times ? `${data.times}x` : undefined,
          ]}
        />
      </p>
      {data.status === "active" && (
        <Progress
          times={data.times}
          completedTimes={data.completedTimes}
          duration={data.duration}
          completedDurationInMs={data.completedDurationInMs}
        />
      )}
    </Card>
  );
}
