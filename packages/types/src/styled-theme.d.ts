import { ThemeConfig } from "./design-system/ThemeConfig";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeConfig {}
}
