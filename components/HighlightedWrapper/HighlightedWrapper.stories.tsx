import { Meta, StoryObj } from "@storybook/react";
import EnvelopeIcon from "../assets/EnvelopeIcon";
import HighlightedWrapper from "./HighlightedWrapper";

export default {
  title: "Component/HighlightedWrapper",
  component: HighlightedWrapper,
} as Meta<typeof HighlightedWrapper>;

export const Default: StoryObj = {
  args: {
    children: (
      <p>
        No tenemos juguetes disponibles en esta categoría. Volvé a intentarlo
        más tarde o mirá todos los juguetes disponibles.
      </p>
    ),
  },
};

export const HighlightedWrapperWithIcon: StoryObj = {
  args: {
    children: (
      <div className="flex justify-center">
        <EnvelopeIcon className="shrink-0" />
        <div className="ml-5 text-center">
          <p>¡Tu mensaje fue enviado! Te responderemos a la brevedad.</p>
          <p className="font-semibold">Enviar otro mensaje</p>
        </div>
      </div>
    ),
  },
};
