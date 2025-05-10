import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";

export const ElementFaq = (): JSX.Element => {
  // FAQ data for mapping
  const faqItems = [
    {
      question: "What is Meetkats?",
      answer: "",
    },
    {
      question: "What will you get after joining us?",
      answer: "",
    },
    {
      question: "How to register for an Event?",
      answer: "",
    },
    {
      question: "How will we help you in Networking?",
      answer: "",
    },
    {
      question: "What is different in Meetkats from other websites?",
      answer: "",
    },
  ];

  return (
    <section className="flex flex-col w-full items-start p-20 lg:p-[140px] bg-white">
      <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-[60px] w-full">
        <h2 className="font-heading-h1-semi-bold font-[number:var(--heading-h1-semi-bold-font-weight)] text-black text-[length:var(--heading-h1-semi-bold-font-size)] tracking-[var(--heading-h1-semi-bold-letter-spacing)] leading-[var(--heading-h1-semi-bold-line-height)] [font-style:var(--heading-h1-semi-bold-font-style)]">
          Frequently <br />
          asked questions
        </h2>

        <div className="flex flex-col items-start gap-10 flex-1 w-full">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-[#004b49] shadow-[10px_10px_20px_#0f0f0f1a] mb-10 last:mb-0"
              >
                <AccordionTrigger className="py-4 px-0">
                  <span className="font-heading-h3-small-semi-bold font-[number:var(--heading-h3-small-semi-bold-font-weight)] text-black text-[length:var(--heading-h3-small-semi-bold-font-size)] tracking-[var(--heading-h3-small-semi-bold-letter-spacing)] leading-[var(--heading-h3-small-semi-bold-line-height)] [font-style:var(--heading-h3-small-semi-bold-font-style)] text-left">
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
