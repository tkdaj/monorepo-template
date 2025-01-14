import styled from 'styled-components/native';
import type { ButtonCommonProps } from '../../../types';
import { defaultButtonStyles, getSizeStyles, getVariantStyles } from '../../../shared/ButtonStyles';
import type { DesignSystem } from '@monorepo-template/types';

export interface ButtonProps extends React.ComponentProps<typeof Button> {}

// TODO: fix styled types for mobile
export const Button = styled.Button<ButtonCommonProps>(({ theme, $variant, $size }) => ({
  ...defaultButtonStyles,
  // we can safely use `as` here since we are defaulting undefined values above within the `attrs` function
  ...getVariantStyles(theme)[$variant as DesignSystem.ColorVariant],
  ...getSizeStyles(theme)[$size as Required<ButtonCommonProps>['$size']],
}));
