import type { Meta, StoryObj } from "@storybook/react";
import { Hero } from "./Hero";

const meta = {
  title: "Module/Hero",
  component: Hero,
  args: {
    title:
      "Adaptamos y prestamos juguetes para niños y niñas con discapacidades motrices complejas.",
    description: "El prestamo no tiene costo",
    cta: {
      name: "Ver juguetes",
      url: "/juguetes",
    },
    photo: {
      _type: "photo",
      altText: "Hero imagen",
      placeholder: "",
      asset: {
        _ref: "image-2c6ca8b13a29f52d84ed64aca9ef05cc61c1f2b4-681x478-jpg",
        _type: "reference",
      },
    },
  },
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
} satisfies Meta<typeof Hero>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
