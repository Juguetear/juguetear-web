import { Meta, StoryObj } from "@storybook/react";
import { Card, CardProps } from "components/Card/Card";
import Carousel from "./Carousel";
import Image from "next/image";

export default {
  title: "Carousel",
  component: Carousel,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  argTypes: {
    cardCount: {
      type: "number",
      defaultValue: 3,
    },
  },
} as Meta<typeof Carousel>;

const mockSlides: CardProps[] = [
  {
    title: "Dragón",
    description: "Dragón que emite luces y sonido cuando se pulsa el botón.",
    available: true,
    link: "/",
  },
  {
    title: "Dragón",
    description: "Dragón que emite luces y sonido cuando se pulsa el botón.",
    available: false,
    link: "/",
  },
  {
    title: "Dragón",
    description: "Dragón que emite luces y sonido cuando se pulsa el botón.",
    available: true,
    link: "/",
  },
  {
    title: "Dragón",
    description: "Dragón que emite luces y sonido cuando se pulsa el botón.",
    available: true,
    link: "/",
  },
  {
    title: "Dragón",
    description: "Dragón que emite luces y sonido cuando se pulsa el botón.",
    available: true,
    link: "/",
  },
];

const mockInnerImages = [
  {
    alt: "Dragón",
    src: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1475&q=80",
  },
  {
    alt: "Dragón",
    src: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1475&q=80",
  },
  {
    alt: "Dragón",
    src: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1475&q=80",
  },
];

export const SimpleCarousel = () => {
  return (
    <Carousel>
      {mockSlides.map((slide, index) => {
        return (
          <Card
            key={index}
            title={slide.title}
            link={slide.link}
            description={slide.description}
            available={slide.available}
          />
        );
      })}
    </Carousel>
  );
};

interface MultipleCardsProps {
  cardCount: number;
}
export const MultipleCardsCarousel: StoryObj<MultipleCardsProps> = {
  render: (args) => {
    const { cardCount } = args;
    return (
      <Carousel>
        {Array.from(
          {
            length: cardCount,
          },
          (_, i) => (
            <Card
              key={i}
              title="Dragón"
              link="/"
              description="Dragón que emite luces y sonido cuando se pulsa el botón."
              available={true}
            />
          )
        )}
      </Carousel>
    );
  },
  args: {
    cardCount: 3,
  },
};

export const FullScreenCarousel = () => {
  return (
    <Carousel isFullWidth>
      {mockInnerImages.map((image, index) => {
        return (
          <Image
            key={index}
            className="mx-auto aspect-video rounded lg:max-w-4xl"
            src={image.src}
            alt={image.alt}
            width={0}
            height={0}
            style={{
              width: "100%",
              maxHeight: "520px",
            }}
          />
        );
      })}
    </Carousel>
  );
};
