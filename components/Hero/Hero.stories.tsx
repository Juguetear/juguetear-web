import { Meta, StoryFn } from "@storybook/react";
import { Hero, HeroProps } from "components/Hero/Hero";

export default {
  title: "Hero",
  component: Hero,
  args: {
    title:
      "Adaptamos y prestamos juguetes para niños y niñas con discapacidades motrices complejas.",
    subTitle: "El prestamo no tiene costo",
    image: {
      src: "https://i.imgur.com/JujA9mV.jpg",
      alt: "Hero imagen",
    },
  },
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
} as Meta<typeof Hero>;

const Template: StoryFn<HeroProps> = (args) => <Hero {...args} />;

export const Default = Template.bind({});
