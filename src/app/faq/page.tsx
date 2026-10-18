import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { FAQContacts, FAQItems } from "~/lib/data";

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
            {FAQItems.map((item, index) => (
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
                      {FAQContacts.students.map((contact) => (
                        <li key={contact.email} className="mb-2 font-bold text-white">
                          {contact.name} <br />
                          <a
                            href={`mailto:${contact.email}`}
                            className="font-normal text-blue-400 underline hover:text-blue-300"
                          >
                            {contact.email}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-1 flex-col items-center">
                    <h3 className="mt-4 text-2xl font-bold text-yellow-400">
                      Mentors
                    </h3>
                    <ul className="mt-2 list-inside text-center">
                      {FAQContacts.mentors.map((contact) => (
                        <li key={contact.email} className="mb-2 font-bold text-white">
                          {contact.name} <br />
                          <a
                            href={`mailto:${contact.email}`}
                            className="font-normal text-blue-400 underline hover:text-blue-300"
                          >
                            {contact.email}
                          </a>
                        </li>
                      ))}
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
