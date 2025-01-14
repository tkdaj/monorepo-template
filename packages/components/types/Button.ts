import type { DesignSystem } from '@monorepo-template/types';

export interface ButtonCommonProps {
  $variant?: DesignSystem.ColorVariant;
  $size?: 'sm' | 'md' | 'lg';
}
