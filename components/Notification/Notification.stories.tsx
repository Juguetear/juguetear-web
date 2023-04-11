import { Meta, StoryObj } from "@storybook/react";
import EnvelopeIcon from "../assets/EnvelopeIcon";
import Notification from "./Notification";

export default {
  title: "Notification",
  component: Notification,
} as Meta<typeof Notification>;

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

export const NotificationWithIcon: StoryObj = {
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
