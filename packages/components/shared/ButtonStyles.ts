import type { DesignSystem } from '@monorepo-template/types';
import type { ButtonCommonProps } from '../types';
import type { DefaultTheme, StyledObject } from 'styled-components/dist/types';
import type { StyledObject as NativeStyledObject } from 'styled-components/native/dist/types';

export type CrossPlatformStyles<Props extends object> =
  | StyledObject<Props>
  | NativeStyledObject<Props>;

export const defaultButtonStyles = {
  borderStyle: 'solid',
  borderWidth: '1px',
  display: 'inline-flex',
  flexDirection: 'row',
  alignItems: 'center',
  cursor: 'pointer',
} as const satisfies CrossPlatformStyles<ButtonCommonProps>;

export const getVariantStyles = (theme: DefaultTheme) =>
  ({
    primary: {
      color: theme.colors.content.primary.color,
      backgroundColor: theme.colors.background.primary.color,
      borderColor: theme.colors.border.primary.color,
      ':disabled': {
        color: theme.colors.content.primary.state.disabled,
        backgroundColor: theme.colors.background.primary.state.disabled,
      },
      ':hover': {
        color: theme.colors.content.primary.state.hover,
        backgroundColor: theme.colors.background.primary.state.hover,
      },
    },
    secondary: {
      color: theme.colors.content.secondary.color,
      backgroundColor: theme.colors.background.secondary.color,
      borderColor: theme.colors.border.secondary.color,
      ':disabled': {
        color: theme.colors.content.secondary.state.disabled,
        backgroundColor: theme.colors.background.secondary.state.disabled,
      },
      ':hover': {
        color: theme.colors.content.secondary.state.hover,
        backgroundColor: theme.colors.background.secondary.state.hover,
      },
    },
  }) as const satisfies Record<DesignSystem.ColorVariant, CrossPlatformStyles<ButtonCommonProps>>;

// TODO: convert hardcoded values to use themes once sizes are added to the theme
// These values should be specific to platform. e.g. native might have more padding on buttons
export const getSizeStyles = (_theme: DefaultTheme) =>
  ({
    sm: {
      paddingInline: '6px',
      fontSize: '16px',
      height: '28px',
      borderRadius: '4px',
    },
    md: {
      paddingInline: '12px',
      height: '38px',
      fontSize: '18px',
      borderRadius: '6px',
    },
    lg: {
      paddingInline: '20px',
      height: '48px',
      fontSize: '20px',
      borderRadius: '8px',
    },
  }) as const satisfies Record<
    Required<ButtonCommonProps>['$size'],
    StyledObject<ButtonCommonProps>
  >;
