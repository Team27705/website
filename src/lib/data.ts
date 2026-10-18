import type {
  Award,
  FAQContact,
  FAQItem,
  NavigationItem,
  Sponsor,
  TeamEvent,
  TeamMember,
} from "./data-types";

export const TeamDepartments = [
  "Mentors",
  "Captains",
  "Operations",
  "Mechanical",
  "Electrical",
  "Programming",
] as const;

export const TeamMembers = [
  { image: "/team/mr-e.jpg", name: "Mr. E", department: "Mentors" },
  { image: "/team/mr-b.jpg", name: "Mr. B", department: "Mentors" },
  { image: "/team/mr-harb.jpg", name: "Mr. Harb", department: "Mentors" },
  {
    image: "/team/lubaba.jpg",
    name: "Lubaba N.",
    department: "Captains",
    role: "Co-Captain",
  },
  {
    image: "/team/christopher.jpg",
    name: "Christopher M.",
    department: "Captains",
    role: "Co-Captain",
  },
  {
    image: "/team/ryan.jpg",
    name: "Ryan L.",
    department: "Operations",
    role: "Operations Lead",
  },
  {
    image: "/team/syeda.jpg",
    name: "Syeda H.",
    department: "Operations",
    role: "Media Lead",
  },
  { image: "/team/jayanti.jpg", name: "Jayanti R.", department: "Operations" },
  {
    image: "/team/ethan.jpg",
    name: "Ethan C.",
    department: "Mechanical",
    role: "Mechanical Lead",
  },
  { image: "/team/gabriel.jpg", name: "Gabriel M.", department: "Mechanical" },
  {
    image: "/team/shreyansh.jpg",
    name: "Shreyansh W.",
    department: "Mechanical",
  },
  { image: "/team/selena.jpg", name: "Selena J.", department: "Mechanical" },
  {
    image: "/team/montasir.jpg",
    name: "Montasir M.",
    department: "Electrical",
    role: "Electrical Lead",
  },
  { image: "/team/noah.jpg", name: "Noah S.", department: "Electrical" },
  {
    image: "/team/rain.jpg",
    name: "Rain C.",
    department: "Programming",
    role: "Programming Lead",
  },
  { image: "/team/madeha.jpg", name: "Madeha B.", department: "Programming" },
  { image: "/team/issac.jpg", name: "Issac L.", department: "Programming" },
] satisfies TeamMember[];

export const TeamEvents = [
  {
    name: "Interest Meeting",
    date: "2026-03-04",
    locationName: "Brooklyn Technical High School",
    locationAddress: "29 Fort Greene Pl, Brooklyn, NY 11217, United States",
    description:
      "An introductory meeting for students interested in joining the ByteKnights. Learn about the upcoming tryouts sessions, team structure, and how to get involved!",
    type: "LOCAL",
  },
] satisfies TeamEvent[];

export const Awards = [
  {
    season: "decode",
    eventName: "NYC Qualifier 4",
    title: "Inspire Award 2nd Place",
  },
  {
    season: "decode",
    eventName: "NYC Qualifier 8",
    title: "Reach Award 1st Place",
  },
  {
    season: "decode",
    eventName: "NYC Super Qualifier 2",
    title: "Innovate Award 2nd Place",
  },
] satisfies Award[];

export const Sponsors = [
  {
    name: "MakeLab",
    logo: "/sponsors/makelab.svg",
    website: "https://makelab.com",
  },
  { name: "Ike Heller Robotics Center", logo: "/sponsors/ike-heller.png" },
  {
    name: "Brooklyn Tech Alumni Foundation",
    logo: "/sponsors/bths-alumni.svg",
    website: "https://bthsalumni.org",
  },
  { name: "Jeffery M. Haitkin '64 Faculty Grant" },
  {
    name: "Kofee Cafe",
    logo: "/sponsors/kofee.svg",
    website: "https://kofeenyc.com",
  },
  { name: "BTHS COMMA" },
] satisfies Sponsor[];

export const FAQItems = [
  {
    question: "What are the Brooklyn ByteKnights?",
    answer:
      "The Brooklyn ByteKnights is the official FTC team of Brooklyn Technical High School. We participate in the FIRST Tech Challenge (FTC) competition, designing, building, and programming robots to compete in various challenges.",
  },
  {
    question: "What is FTC/ First Tech Challenge?",
    answer:
      "FTC stands for FIRST Tech Challenge, which is a robotics competition for students in grades 7-12. Teams design, build, and program robots to compete in different games every year, with each game presenting new challenges to design robots around.",
  },
  {
    question: "How often does the team meet/ What is the time commitment?",
    answer:
      "Usually, the team meets on Wednesdays and Thursdays after school, until ~6 PM. During competition/build season, we usually meet on every school day until ~6 PM. Additional meetings may be scheduled on weekends or during school breaks as needed. All team members are expected to show up for all meetings, unless excused by mentors/coaches beforehand.",
  },
  {
    question: "When does competition/build season take place?",
    answer:
      "Competition season typically starts in early September, while build season starts around October and runs through December. FTC seasons usually end with regional competitions held between February and April and the World Championship taking place in late April or early May.",
  },
  {
    question: "When/Where are the competitions?",
    answer:
      "Competitions are usually held at various locations throughout New York City and the surrounding areas. However, the exact locations vary each year. The competitions usually take place on weekends during the competition season, starting from November through April.",
  },
  {
    question: "How can I join the ByteKnights?",
    answer:
      "We usually host tryouts towards the end of the school year for the following year. Keep an eye on our Instagram for announcements regarding tryouts and application details.",
  },
  {
    question: "What happens during tryouts?",
    answer:
      "During tryouts, applicants will participate in a few activities designed to assess their communication and teamwork abilities. The goal is to primarily evaluate how well candidates can work within a team. No prior robotics, programming, or engineering experience is necessary to join the team.",
  },
  {
    question:
      "I don't particularly enjoy robotics, but I still want to be involved. Are there things I can help with?",
    answer:
      "Absolutely! The ByteKnights welcome members with a variety of interests and skills. You can contribute in areas such as marketing, event planning, fundraising, and outreach. Your involvement is valuable in supporting the team beyond just robotics.",
  },
  {
    question:
      "I have other clubs/sports/commitments after school. Can I still join?",
    answer:
      "This depends on the specific schedule and nature of your other commitments. We understand that students have various interests and responsibilities, but being an active member of the ByteKnights requires a significant time commitment. Please consult with our team mentors to discuss your situation.",
  },
] satisfies FAQItem[];

export const NavigationItems = [
  {
    title: "Our Team",
    href: "/team",
    description: "Learn more about our team!",
  },
  {
    title: "Sponsors",
    href: "/sponsors",
    description: "Discover our sponsors",
  },
  {
    title: "Donate",
    href: "/donate",
    description: "Give us a hand to keep us going!",
  },
  {
    title: "FAQs",
    href: "/faq",
    description: "Frequently Asked Questions",
  },
] satisfies NavigationItem[];

export const FAQContacts = {
  students: [
    { name: "Lubaba N.", email: "lubaban2@nycstudents.net" },
    { name: "Christopher M.", email: "christopherm1100@nycstudents.net" },
    { name: "Issac L.", email: "issacl14@nycstudents.net" },
  ],
  mentors: [
    { name: "Mr. E", email: "mesguerra@schools.nyc.gov" },
    { name: "Mr. B", email: "kbhatnagar@schools.nyc.gov" },
    { name: "Mr. Harb", email: "aharb@schools.nyc.gov" },
  ],
} satisfies Record<"students" | "mentors", FAQContact[]>;

export const TeamStory =
  "In 2024, the FTC Brooklyn ByteKnights was formed. As a rookie, we used a kit bot and with the limited resources and knowledge we had, we did the best we could. But for our second year, we’re ready to kick it off with a robot of our own! Get ready for this year’s season of FTC as the ByteKnights are ready to crush it!";
