import { Meta, StoryFn } from "@storybook/react";
import { Hero, HeroSection } from "components/Hero/Hero";

export default {
  title: "Hero",
  component: Hero,
  args: {
    title:
      "Adaptamos y prestamos juguetes para niños y niñas con discapacidades motrices complejas.",
    description: "El prestamo no tiene costo",
    cta: {
      _type: "photo",
      name: "Ver juguetes",
      url: "##",
    },
    photo: {
      _type: "photo",
      altText: "Hero imagen",
      asset: {
        _ref: "image-maestro-750x478-jpg",
        _type: "image",
      },
    },
  },
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
} as Meta<typeof Hero>;

const Template: StoryFn<HeroSection> = (args) => <Hero {...args} />;

export const Default = Template.bind({});
