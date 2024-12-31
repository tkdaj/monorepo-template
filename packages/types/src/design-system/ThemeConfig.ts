import { BreakpointsConfig } from "./BreakpointsConfig";
import { TypographyConfig } from "./TypographyConfig";
import { ColorsConfig } from "./ColorsConfig";

export interface ThemeConfig {
  breakpoints: BreakpointsConfig;
  typography: TypographyConfig;
  colors: ColorsConfig;
}
