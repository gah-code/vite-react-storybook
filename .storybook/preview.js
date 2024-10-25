import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../src/themes'; // Ensure the path matches the actual location of your themes
import { GlobalStyles } from '../src/styles/GlobalStyles'; // Ensure the path matches the actual location of your global styles

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: lightTheme.background || '#ffffff' },
        { name: 'dark', value: darkTheme.background || '#000000' },
      ],
    },
  },
  decorators: [
    withThemeFromJSXProvider({
      themes: {
        light: lightTheme,
        dark: darkTheme,
      },
      defaultTheme: 'light',
      Provider: ThemeProvider,
      GlobalStyles,
    }),
  ],
};

export default preview;
