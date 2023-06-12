import { Meta, StoryObj } from "@storybook/react";
import { Card, CardProps } from "components/Card/Card";
import Carousel from "./Carousel";

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
