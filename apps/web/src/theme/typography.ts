import type { DesignSystem } from '@monorepo-template/types';

export const typography = {
  fontFamily: '',
  letterSpacing: {},
  weights: {},
  sizes: {},
} as const satisfies DesignSystem.TypographyConfig;
