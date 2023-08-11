import type { Meta, StoryObj } from "@storybook/react";
import { AboutProjectSection } from "./AboutProjectSection";

const meta = {
  component: AboutProjectSection,
  title: "AboutProjectSection",
  args: {
    title: "About Project",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ultrices nisi, ac vulputate nunc. Sed vitae ultrices nisi, ac vulputate nunc. Sed vitae ultrices nisi, ac vulputate nunc. Sed",
    photos: [
      {
        asset: {
          _ref: "image-f8dd92465a2f24239764fb8b268f207050b85018-372x210-jpg",
          _type: "reference",
        },
        placeholder:
          "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAALABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAYCBAX/xAAjEAACAgEDAwUAAAAAAAAAAAABAgMEAAURMRITIRQiQVFx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/xAAaEQACAwEBAAAAAAAAAAAAAAABAgADERIi/9oADAMBAAIRAxEAPwB17b7kOyIefcwGZ0eqVWtSQGUdSfK+QfzGfWdJo3wvq6yS7HxvkaOm0qkapXqxRqOAFwW1Mw8tkJZtBEow05poxJHsVPGGMkQCoAoAH0MMpzFs/9k=",
        altText: "about juguetear",
        _type: "img",
      },
      {
        _type: "img",
        placeholder:
          "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAALABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAQGBf/EACEQAAIBBQABBQAAAAAAAAAAAAECAwAEBREhYQYSMTJR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgH/xAAZEQADAQEBAAAAAAAAAAAAAAAAARECAxL/2gAMAwEAAhEDEQA/ALiSNolJMLnX4KzcbcxXGRZVt2kkLfDqR7PNVIupo73JIj6VIQyjQ4e0n6RJuMdHPNp5WJLMR09o9ePtJWFzvWXUMriiw3th41RVDH9BRTgaf//Z",
        asset: {
          _ref: "image-5dbab151906d217303b9d363e1ef8c76f60971da-372x210-jpg",
          _type: "reference",
        },
        altText: "about juguetear",
      },
    ],
  },
} satisfies Meta<typeof AboutProjectSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
