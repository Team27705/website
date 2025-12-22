import React, { cloneElement } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Gamepad2, Sword, Swords, Trophy } from "lucide-react";
import * as z from "zod";
import { cn } from "~/lib/utils";

// CHANGE EVENTS HERE
export const TeamEvents: z.infer<typeof TeamEventSchema>[] = [
  {
    name: "FTC NYC Qualifier 8",
    date: "2026-01-17",
    locationName: "Francis Lewis High School",
    locationAddress:
      "58-20 Utopia Pkwy, Fresh Meadows, NY 11365, United States",
    description:
      "The eighth qualifier event of the FTC season, where teams compete to advance to the regional championships.\n\nThis is our second qualifier of the season.",
    type: "QUALI",
  },
  {
    name: "FTC NYC Super Qualifier 1",
    date: "2026-02-28",
    locationName: "John Dewey High School",
    locationAddress: "50 Avenue X, Brooklyn, NY 11223, United States",
    description:
      "The first super qualifier event of the FTC season, where top teams from qualifiers compete for a chance to advance to the regional championships.",
    type: "SUPERQUALI",
  },
];

const teamEventEnum = z.enum(["QUALI", "SUPERQUALI", "CHAMPS", "SCRIM"]);
type TeamEventType = z.infer<typeof teamEventEnum>;

const EventTypeIconsMap: Record<TeamEventType, React.ReactNode> = {
  QUALI: <Sword />,
  SUPERQUALI: <Swords />,
  CHAMPS: <Trophy />,
  SCRIM: <Gamepad2 />,
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
};

const TeamEventSchema = z.object({
  name: z.string().min(1).max(100),
  date: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid date format",
  }),
  locationName: z.string().max(100),
  locationAddress: z.string().min(1).max(200),
  description: z.string().max(1000).optional(),
  type: teamEventEnum,
});

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
