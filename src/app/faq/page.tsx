import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
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
];

export default function FAQPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-linear-to-b from-[#032d64] to-[#15162c] text-white">
      <div className="relative container flex h-[35vh] max-h-[35vh] items-center justify-center px-4 pt-32">
        <div className="flex w-full max-w-[min(92vw,1200px)] flex-col items-center justify-center">
          <h1 className="text-center text-6xl font-bold text-yellow-400">
            FAQs
          </h1>
        </div>
      </div>
      <section
        className="relative container flex w-full flex-col items-center justify-center px-4 py-8"
        id="sponsors"
      >
        <div className="flex w-full max-w-[min(92vw,800px)] flex-col gap-y-6">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="text-white"
              >
                <AccordionTrigger className="text-xl font-semibold">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-300">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
            <AccordionItem
              key="more-info"
              value="more-info"
              className="text-white"
            >
              <AccordionTrigger className="text-xl font-semibold">
                I have more questions, who can I ask them to?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-gray-300">
                If you have any further questions or need more information, feel
                free to reach out to any of the people below:
                <div className="mt-4 flex w-full flex-col items-center justify-center gap-10 sm:flex-row">
                  <div className="flex flex-1 flex-col items-center">
                    <h3 className="mt-4 text-2xl font-bold text-yellow-400">
                      Students
                    </h3>
                    <ul className="mt-2 list-inside text-center">
                      <li className="mb-2 font-bold text-white">
                        Lubaba N. <br />
                        <a
                          href="mailto:lubaban2@nycstudents.net"
                          className="font-normal text-blue-400 underline hover:text-blue-300"
                        >
                          lubaban2@nycstudents.net
                        </a>
                      </li>
                      <li className="mb-2 font-bold text-white">
                        Christopher M. <br />
                        <a
                          href="mailto:christopherm1100@nycstudents.net"
                          className="font-normal text-blue-400 underline hover:text-blue-300"
                        >
                          christopherm1100@nycstudents.net
                        </a>
                      </li>
                      <li className="mb-2 font-bold text-white">
                        Issac L. <br />
                        <a
                          href="mailto:issacl14@nycstudents.net"
                          className="font-normal text-blue-400 underline hover:text-blue-300"
                        >
                          issacl14@nycstudents.net
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-1 flex-col items-center">
                    <h3 className="mt-4 text-2xl font-bold text-yellow-400">
                      Mentors
                    </h3>
                    <ul className="mt-2 list-inside text-center">
                      <li className="mb-2 font-bold text-white">
                        Mr. E <br />
                        <a
                          href="mailto:mesguerra@schools.nyc.gov"
                          className="font-normal text-blue-400 underline hover:text-blue-300"
                        >
                          mesguerra@schools.nyc.gov
                        </a>
                      </li>
                      <li className="mb-2 font-bold text-white">
                        Mr. B <br />
                        <a
                          href="mailto:kbhatnagar@schools.nyc.gov"
                          className="font-normal text-blue-400 underline hover:text-blue-300"
                        >
                          kbhatnagar@schools.nyc.gov
                        </a>
                      </li>
                      <li className="mb-2 font-bold text-white">
                        Mr. Harb <br />
                        <a
                          href="mailto:aharb@schools.nyc.gov"
                          className="font-normal text-blue-400 underline hover:text-blue-300"
                        >
                          aharb@schools.nyc.gov
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </main>
  );
}
