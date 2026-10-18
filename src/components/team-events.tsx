import { Gamepad2, MapPinned, Sword, Swords, Trophy } from "lucide-react";
import React, { cloneElement } from "react";
import { cn } from "~/lib/utils";
import { TeamEvents, type TeamEventType } from "~/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const EventTypeIconsMap: Record<TeamEventType, React.ReactNode> = {
  QUALI: <Sword />,
  SUPERQUALI: <Swords />,
  CHAMPS: <Trophy />,
  SCRIM: <Gamepad2 />,
  LOCAL: <MapPinned />,
};

const EventTypeColorsMap: Record<
  TeamEventType,
  { background: string; icon: string; text: string; border: string }
> = {
  QUALI: {
    icon: "stroke-blue-100",
    background: "bg-blue-900",
    text: "text-blue-200",
    border: "border-blue-400",
  },
  SUPERQUALI: {
    icon: "stroke-purple-100",
    background: "bg-purple-900",
    text: "text-purple-200",
    border: "border-purple-400",
  },
  CHAMPS: {
    icon: "stroke-yellow-100",
    background: "bg-yellow-900",
    text: "text-yellow-200",
    border: "border-yellow-400",
  },
  SCRIM: {
    icon: "stroke-red-100",
    background: "bg-red-900",
    text: "text-red-200",
    border: "border-red-400",
  },
  LOCAL: {
    icon: "stroke-green-100",
    background: "bg-green-900",
    text: "text-green-200",
    border: "border-green-400",
  },
};

export function TeamEventsComponent({ className }: { className?: string }) {
  return (
    <div className={cn("sm:max-w-[50vw]", className)}>
      {TeamEvents.map((event, index) => {
        const { background, text, border } = EventTypeColorsMap[event.type];
        const mapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(event.locationAddress)}`;
        return (
          <Card key={index} className={`mb-4 ${background} ${border}`}>
            <CardHeader>
              <div className="flex items-center gap-2">
                {cloneElement(
                  EventTypeIconsMap[event.type] as React.ReactElement,
                  {
                    className: EventTypeColorsMap[event.type].icon,
                  } as React.Attributes,
                )}
                <CardTitle className={text}>{event.name}</CardTitle>
              </div>
              <CardDescription
                className={cn(text, "flex flex-col gap-1 sm:flex-row")}
              >
                {new Date(event.date).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
                <span className="hidden sm:inline">@</span>
                {event.locationName && event.locationAddress && (
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(
                      text,
                      "w-fit underline transition-opacity hover:opacity-80",
                    )}
                  >
                    {event.locationName}
                  </a>
                )}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className={text}>{event.description}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
