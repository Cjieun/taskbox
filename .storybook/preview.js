/** @type { import('@storybook/react').Preview } */
import "../src/index.css";

// Registers the msw addon
import { initialize, mswDecorator } from "msw-storybook-addon";

// Initialize MSW
initialize();

const preview = {
  decorators: [mswDecorator],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
