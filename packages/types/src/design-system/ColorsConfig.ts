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
  content: {
    primary: ColorConfig;
    secondary: ColorConfig;
  };
  background: {
    primary: ColorConfig;
    secondary: ColorConfig;
  };
  border: {
    primary: ColorConfig;
    secondary: ColorConfig;
  };
}
