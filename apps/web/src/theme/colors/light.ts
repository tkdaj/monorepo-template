import type { DesignSystem } from "types";

export const lightColors = {
  content: {
    primary: {
      color: "#222222",
      state: {
        disabled: "#999999",
        hover: "#444444",
      },
    },
    secondary: {
      color: "#CCCCCC",
      state: {
        disabled: "#AAAAAA",
        hover: "#EEEEEE",
      },
    },
  },
  background: {
    primary: {
      color: "#DDDDDD",
      state: {
        disabled: "#444444",
        hover: "#AAAAAA",
      },
    },
    secondary: {
      color: "#333333",
      state: {
        disabled: "#555555",
        hover: "#222222",
      },
    },
  },
  border: {
    primary: {
      color: "#222222",
      state: {
        disabled: "#999999",
        hover: "#444444",
      },
    },
    secondary: {
      color: "#333333",
      state: {
        disabled: "#555555",
        hover: "#222222",
      },
    },
  },
} as const satisfies DesignSystem.ColorsConfig;
