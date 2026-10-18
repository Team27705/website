import * as z from "zod";

export const TeamDepartment = z.enum([
  "Mentors",
  "Captains",
  "Operations",
  "Mechanical",
  "Electrical",
  "Programming",
]);
export type TeamDepartment = z.infer<typeof TeamDepartment>;

export type TeamMember = {
  image: string;
  name: string;
  department: TeamDepartment;
  role?: string;
};

export const TeamEventType = z.enum([
  "QUALI",
  "SUPERQUALI",
  "CHAMPS",
  "SCRIM",
  "LOCAL",
]);
export type TeamEventType = z.infer<typeof TeamEventType>;

export type TeamEvent = {
  name: string;
  date: string;
  locationName: string;
  locationAddress: string;
  description?: string;
  type: TeamEventType;
};

export type Award = {
  season: "decode" | "into-the-deep";
  eventName: string;
  title: string;
};

export type Sponsor = {
  name: string;
  logo?: string;
  website?: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type NavigationItem = {
  title: string;
  href: string;
  description: string;
};

export type FAQContact = {
  name: string;
  email: string;
};
