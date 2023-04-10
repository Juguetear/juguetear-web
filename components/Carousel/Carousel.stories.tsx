import { Meta } from "@storybook/react";
import Carousel, { CarouselSlideData } from "./Carousel";

export default {
  title: "Carousel",
  component: Carousel,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
} as Meta<typeof Carousel>;

const mockSlides: CarouselSlideData[] = [
  {
    title: "Dragón",
    description: "Dragón que emite luces y sonido cuando se pulsa el botón.",
    isAvailable: true,
    link: "/",
  },
  {
    title: "Dragón",
    description: "Dragón que emite luces y sonido cuando se pulsa el botón.",
    isAvailable: false,
    link: "/",
  },
  {
    title: "Dragón",
    description: "Dragón que emite luces y sonido cuando se pulsa el botón.",
    isAvailable: true,
    link: "/",
  },
  {
    title: "Dragón",
    description: "Dragón que emite luces y sonido cuando se pulsa el botón.",
    isAvailable: true,
    link: "/",
  },
  {
    title: "Dragón",
    description: "Dragón que emite luces y sonido cuando se pulsa el botón.",
    isAvailable: true,
    link: "/",
  },
];

export const SimpleCarousel = () => {
  return <Carousel slides={mockSlides} />;
};
