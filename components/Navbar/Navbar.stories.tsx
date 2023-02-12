import { Meta, StoryObj } from "@storybook/react";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { Router } from "next/router";
import { Navbar } from "./Navbar";

const mockRouter = (router: Partial<Router>): Router => {
  return {
    ...router,
  } as Router;
};

type Story = StoryObj<typeof Navbar>;

export default {
  title: "Navbar",
  component: Navbar,
} as Meta<typeof Navbar>;

export const Default: Story = {};

export const CurrentLinkAbout: Story = {
  render: () => (
    <RouterContext.Provider value={mockRouter({ route: "about" })}>
      <Navbar />
    </RouterContext.Provider>
  ),
};

export const CurrentLinkColaborar: Story = {
  render: () => (
    <RouterContext.Provider value={mockRouter({ route: "colaborar" })}>
      <Navbar />
    </RouterContext.Provider>
  ),
};
