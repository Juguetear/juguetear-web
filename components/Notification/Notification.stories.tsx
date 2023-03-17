import { Meta, StoryFn } from "@storybook/react";
import EnvelopeIcon from "../assets/EnvelopeIcon";
import Notification from "./Notification";

export default {
  title: "Notification",
  component: Notification,
} as Meta<typeof Notification>;

const Template: StoryFn<typeof Notification> = (args) => (
  <Notification {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: (
    <p>
      No tenemos juguetes disponibles en esta categoría. Volvé a intentarlo más
      tarde o mirá todos los juguetes disponibles.
    </p>
  ),
};

export const NotificationWithIcon = Template.bind({});
NotificationWithIcon.args = {
  children: (
    <>
      <EnvelopeIcon />
      <div className="ml-5 text-center">
        <p>¡Tu mensaje fue enviado! Te responderemos a la brevedad.</p>
        <p className="font-semibold">Enviar otro mensaje</p>
      </div>
    </>
  ),
};
