"use client";

import { Disclosure, Transition } from "@headlessui/react";

import { IconChevron } from "../IconChevron/IconChevron";

interface AccordionProps {
  title: string;
  children: JSX.Element;
}

export const Accordion = ({ title, children }: AccordionProps) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="focus:rounded flex w-full items-center justify-between border-b border-gray px-3 py-5 text-left font-outfit text-sm font-bold text-blue last:border-none hover:text-orange focus:shadow-md focus:outline-none sm:text-base">
            {title}
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
            <Disclosure.Panel className="px-3 py-5 text-left font-outfit text-sm font-normal text-blue sm:text-base">
              {children}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};
