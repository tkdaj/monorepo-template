import styled from 'styled-components';
import type { ButtonCommonProps } from '../../../types';

import type { DesignSystem } from '@monorepo-template/types';
import { defaultButtonStyles, getSizeStyles, getVariantStyles } from '../../../shared/ButtonStyles';

export interface ButtonProps extends React.ComponentProps<typeof Button> {}

export const Button = styled.button.attrs<ButtonCommonProps>(
  ({ type = 'button', $size = 'md', $variant = 'primary', ...props }) => ({
    ...props,
    $size,
    $variant,
    type,
  })
)(({ theme, $variant, $size }) => ({
  ...defaultButtonStyles,
  // we can safely use `as` here since we are defaulting undefined values above within the `attrs` function
  ...getVariantStyles(theme)[$variant as DesignSystem.ColorVariant],
  ...getSizeStyles(theme)[$size as Required<ButtonCommonProps>['$size']],
}));
