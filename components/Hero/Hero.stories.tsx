import type { Meta, StoryObj } from "@storybook/react";
import type { SanityImage } from "types/common";
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
    photo: {} as SanityImage,
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
