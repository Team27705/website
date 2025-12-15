import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Trophy } from "lucide-react";
import { Button } from "./ui/button";
import * as z from "zod";
import { cn } from "~/lib/utils";

const teamEventEnum = z.enum(["COMP", "WORKSHOP", "WEBINAR", "CONFERENCE"]);
type TeamEventType = z.infer<typeof teamEventEnum>;

const EventTypeIconsMap: Record<TeamEventType, React.ReactNode> = {
  COMP: <Trophy className="stroke-blue-100" />,
  WORKSHOP: <></>,
  WEBINAR: <></>,
  CONFERENCE: <></>,
};

const EventTypeColorsMap: Record<
  TeamEventType,
  { background: string; text: string; border: string }
> = {
  COMP: {
    background: "bg-blue-900",
    text: "text-blue-200",
    border: "border-blue-400",
  },
  WORKSHOP: {
    background: "bg-green-900",
    text: "text-green-200",
    border: "border-green-400",
  },
  WEBINAR: {
    background: "bg-yellow-900",
    text: "text-yellow-200",
    border: "border-yellow-400",
  },
  CONFERENCE: {
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

export const TeamEvents: z.infer<typeof TeamEventSchema>[] = [
  {
    name: "FTC Qualifier 4",
    date: "2025-12-20",
    locationName: "University Heights High School",
    locationAddress: "701 Saint Anns Ave, Bronx, NY 10455, United States",
    description:
      "The fourth qualifier event for the FTC season, where teams compete to advance to the regional championships.\n\nThis is our first qualifier of the season.",
    type: "COMP",
  },
  {
    name: "FTC Qualifier 8",
    date: "2026-01-17",
    locationName: "Francis Lewis High School",
    locationAddress:
      "58-20 Utopia Pkwy, Fresh Meadows, NY 11365, United States",
    description:
      "The eighth qualifier event for the FTC season, where teams compete to advance to the regional championships.\n\nThis is our second qualifier of the season.",
    type: "COMP",
  },
];

export function TeamEventsComponent() {
  return (
    <div className="sm:max-w-[50vw]">
      {TeamEvents.map((event, index) => {
        const { background, text, border } = EventTypeColorsMap[event.type];
        const mapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(event.locationAddress)}`;
        return (
          <Card key={index} className={`mb-4 ${background} ${border}`}>
            <CardHeader>
              <div className="flex items-center gap-2">
                {EventTypeIconsMap[event.type]}
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
