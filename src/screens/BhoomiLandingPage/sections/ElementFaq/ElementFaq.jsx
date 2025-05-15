import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";

export const ElementFaq = ()=> {
  // FAQ data with complete answers
  const faqItems = [
    {
      question: "What is Meetkats?",
      answer: "Meetkats is a platform designed to connect professionals and enthusiasts through events, fostering networking opportunities and knowledge sharing within communities.",
    },
    {
      question: "What will you get after joining us?",
      answer: "After joining Meetkats, you'll gain access to exclusive events, networking opportunities with industry professionals, and resources to help you grow both personally and professionally.",
    },
    {
      question: "How to register for an Event?",
      answer: "Registering for an event is simple. Browse through our events section, select an event you're interested in, click the 'Register' button, and follow the prompts to complete your registration.",
    },
    {
      question: "How will we help you in Networking?",
      answer: "We facilitate networking through curated events, matchmaking features based on interests, dedicated networking sessions, and digital tools to connect with attendees before, during, and after events.",
    },
    {
      question: "What is different in Meetkats from other websites?",
      answer: "Meetkats stands out with its focus on meaningful connections, personalized event recommendations, community-driven approach, and integrated tools specifically designed to enhance networking effectiveness.",
    },
  ];

  return (
    <section className="flex flex-col w-full items-start p-4 sm:p-8 md:p-12 lg:p-20 xl:p-[140px] bg-white">
      <div className="flex flex-col lg:flex-row items-start gap-6 md:gap-8 lg:gap-[60px] w-full">
        <h2 className="font-heading-h1-semi-bold font-[number:var(--heading-h1-semi-bold-font-weight)] text-black text-[length:var(--heading-h1-semi-bold-font-size)] tracking-[var(--heading-h1-semi-bold-letter-spacing)] leading-[var(--heading-h1-semi-bold-line-height)] [font-style:var(--heading-h1-semi-bold-font-style)] mb-6 lg:mb-0 lg:sticky lg:top-8">
          Frequently <br className="hidden sm:block" />
          asked questions
        </h2>

        <div className="flex flex-col items-start gap-6 flex-1 w-full">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-[#004b49] shadow-[10px_10px_20px_#0f0f0f1a] mb-6 last:mb-0"
              >
                <AccordionTrigger className="py-4 px-0">
                  <span className="font-heading-h3-small-semi-bold font-[number:var(--heading-h3-small-semi-bold-font-weight)] text-black text-[length:var(--heading-h3-small-semi-bold-font-size)] tracking-[var(--heading-h3-small-semi-bold-letter-spacing)] leading-[var(--heading-h3-small-semi-bold-line-height)] [font-style:var(--heading-h3-small-semi-bold-font-style)] text-left">
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="py-2 text-gray-700">
                    {item.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};