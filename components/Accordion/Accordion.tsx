"use client";

import { Disclosure, Transition } from "@headlessui/react";

import { IconChevron } from "../IconChevron/IconChevron";

interface AccordionProps {
  text: string;
  content: string;
}

export const Accordion = ({ text, content }: AccordionProps) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="border-b border-gray last:border-none px-3 py-5 flex justify-between items-center text-base text-blue hover:text-orange font-outfit font-bold focus:shadow-1md focus:outline-none focus:rounded w-full">
            {text}
            <IconChevron className="fill-orange" open={open} />
          </Disclosure.Button>

          <Transition
            enter="motion-reduce:transition-none motion-safe:transition-opacity"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="motion-reduce:transition-none motion-safe:transition-opacity"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Disclosure.Panel className="px-3 py-5 text-blue font-outfit font-normal text-base">
              {content}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};
