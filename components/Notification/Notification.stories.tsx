import { Meta, StoryFn } from "@storybook/react";
import { Notification } from "./Notification";

export default {
  title: "Notification",
  component: Notification,
} as Meta<typeof Notification>;

const Template: StoryFn<typeof Notification> = () => (
  <Notification>
    <div>
      No tenemos juguetes disponibles en esta categoría. Volvé a intentarlo más
      tarde o mirá todos los juguetes disponibles.
    </div>
  </Notification>
);

export const Default = Template.bind({});
