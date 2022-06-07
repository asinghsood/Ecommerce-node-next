import { lightTheme, darkTheme } from "./theme/colors";
import { GlobalStyles } from "./theme/globalStyle";
import { typography } from './theme/typography';
import type {ThemeObject} from './types';

const themes = {
  lightTheme,
  darkTheme,
  typography,
  GlobalStyles
};

export type {ThemeObject}
export default themes;
