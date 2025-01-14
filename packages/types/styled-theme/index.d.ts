import type { DesignSystem } from '@monorepo-template/types';

declare module 'styled-components' {
  export interface DefaultTheme extends DesignSystem.ThemeConfig {}
}
