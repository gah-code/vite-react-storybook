import { Colors } from '../foundation/Colors';
import { lightTheme, darkTheme } from '../themes';

export default {
  title: 'Foundation/Colors',
  component: Colors,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

const Template = (args) => <Colors {...args} />;

export const LightThemeColors = Template.bind({});
LightThemeColors.args = {
  colors: lightTheme,
};

export const DarkThemeColors = Template.bind({});
DarkThemeColors.args = {
  colors: darkTheme,
};
