"use client";

import { Disclosure } from "@headlessui/react";
import { motion, useReducedMotion } from "framer-motion";

import { IconChevron } from "../IconChevron/IconChevron";

interface AccordionProps {
  text: string;
  content: string;
}

export const Accordion = ({ text, content }: AccordionProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="border-b border-gray last:border-none px-3 py-5 flex justify-between items-center text-base text-blue hover:text-orange font-outfit font-bold focus:shadow-1md focus:outline-none focus:rounded w-full">
            {text}
            <IconChevron className="fill-orange" open={open} />
          </Disclosure.Button>

          {open && (
            <motion.div
              className="px-3 py-5 text-blue font-outfit font-normal text-base"
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
            >
              {content}
            </motion.div>
          )}
        </>
      )}
    </Disclosure>
  );
};
