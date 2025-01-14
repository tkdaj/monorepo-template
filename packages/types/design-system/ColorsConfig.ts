export type ColorVariant = 'primary' | 'secondary';

interface ColorConfig {
  color: string;
  state: {
    disabled: string;
    hover: string;
  };
  // TODO: add these values
  // validation: {
  //   info: string;
  //   success: string;
  //   warning: string;
  //   error: string;
  // };
}

export interface ColorsConfig {
  content: Record<ColorVariant, ColorConfig>;
  background: Record<ColorVariant, ColorConfig>;
  border: Record<ColorVariant, ColorConfig>;
}
