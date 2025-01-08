import { POJO } from "@monorepo-template/types";

export interface TypographyConfig {
  // TODO: update weights and letter spacing to have
  // specific values to be used within the design system
  weights: POJO;
  letterSpacing: POJO;
  sizes: POJO;
  fontFamily: string;
}
