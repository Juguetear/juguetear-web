import React from "react";
import { FaqPage } from "types/faq-page";
import { Accordion } from "components/Accordion/Accordion";
import { PortableTxt } from "components/PortableTxt/PortableTxt";

export const FAQSection = ({ title, faqList, paragraph }: FaqPage) => {
  return (
    <section className="py-10">
      <div className="container">
        <h2 className="mb-5 text-center md:mb-8">{title}</h2>
        <p className="mb-5 text-center md:mb-12">{paragraph}</p>
        <div className="mb-5 md:mb-8">
          {faqList.map((faq, index) => (
            <Accordion key={index} title={faq.question}>
              <PortableTxt content={faq.answer} />
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};
