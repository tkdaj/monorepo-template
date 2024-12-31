import { darkColors } from "./colors/dark";
import { lightColors } from "./colors/light";
import { breakpoints } from "./breakpoints";
import { typography } from "./typography";
import { DesignSystemProvider as LibDesignSystemProvider } from "design-system";
import { useMemo } from "react";

const themes = {
  light: lightColors,
  dark: darkColors,
} as const;

interface DesignSystemProviderProps
  extends React.PropsWithChildren<{
    theme: keyof typeof themes;
  }> {}
export function DesignSystemProvider({
  theme,
  children,
}: DesignSystemProviderProps) {
  const themeConfig = useMemo(
    () => ({
      typography,
      breakpoints,
      colors: themes[theme],
    }),
    [theme]
  );
  return (
    <LibDesignSystemProvider themeConfig={themeConfig}>
      {children}
    </LibDesignSystemProvider>
  );
}
