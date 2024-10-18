import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';
import tedxtheme from './tedxtheme';

addons.setConfig({
  theme: tedxtheme,
});