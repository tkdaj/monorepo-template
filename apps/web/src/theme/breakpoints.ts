// Using bootstrap breakpoints as defaults
// ref: https://getbootstrap.com/docs/5.0/layout/breakpoints/

import { DesignSystem } from "types";

export const breakpoints = {
  xs: "0",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  xxl: "1400px",
} as const satisfies DesignSystem.BreakpointsConfig;
