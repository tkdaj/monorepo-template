import { Preview } from "@storybook/react";
import { StrictMode } from "react";
import { DesignSystemProvider } from "../src/theme";

type Parameters = NonNullable<Preview["parameters"]>;

const viewports = {
  iPhone: {
    name: "iPhone 14 Pro Max",
    styles: {
      width: "430px",
      height: "932px",
    },
  },
  iPadMini: {
    name: "iPad Mini",
    styles: {
      width: "768px",
      height: "1024px",
    },
  },
  iPadAir: {
    name: "iPad Air",
    styles: {
      width: "820px",
      height: "1180px",
    },
  },
  iPadPro: {
    name: "iPad Pro",
    styles: {
      width: "1024px",
      height: "1366px",
    },
  },
  desktopSmall: {
    name: "Small Desktop",
    styles: {
      width: "992px",
      height: "100%",
    },
  },
  desktopMedium: {
    name: "Medium Desktop",
    styles: {
      width: "1200px",
      height: "100%",
    },
  },
  desktopLarge: {
    name: "Large Desktop",
    styles: {
      width: "1400px",
      height: "100%",
    },
  },
  desktopFull: {
    name: "Desktop Full Width",
    styles: {
      width: "100%",
      height: "100%",
    },
  },
} as const;

const parameters = {
  layout: "fullscreen",
  options: {
    storySort: {
      order: ["atoms"],
    },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
  viewport: {
    viewports,
  },
  // visualViewport: {
  //   // /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/VisualViewport/height) */
  //   // readonly height: number;
  //   // /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/VisualViewport/offsetLeft) */
  //   // readonly offsetLeft: number;
  //   // /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/VisualViewport/offsetTop) */
  //   // readonly offsetTop: number;
  //   // /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/VisualViewport/resize_event) */
  //   // onresize: ((this: VisualViewport, ev: Event) => any) | null;
  //   // /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/VisualViewport/scroll_event) */
  //   // onscroll: ((this: VisualViewport, ev: Event) => any) | null;
  //   // /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/VisualViewport/pageLeft) */
  //   // readonly pageLeft: number;
  //   // /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/VisualViewport/pageTop) */
  //   // readonly pageTop: number;
  //   // /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/VisualViewport/scale) */
  //   // readonly scale: number;
  //   // /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/VisualViewport/width) */
  //   // readonly width: number;
  //   // addEventListener<K extends keyof VisualViewportEventMap>(type: K, listener: (this: VisualViewport, ev: VisualViewportEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
  //   // addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
  //   // removeEventListener<K extends keyof VisualViewportEventMap>(type: K, listener: (this: VisualViewport, ev: VisualViewportEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
  //   // removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
  // },
} as const satisfies Parameters;

const defaultTheme = "light";

const preview: Preview = {
  parameters,
  initialGlobals: {
    theme: defaultTheme,
  },
  globalTypes: {
    theme: {
      description: "theme",
      toolbar: {
        title: "Theme",
        dynamicTitle: true,
        showName: true,
        items: [
          { value: "light", title: "Light Theme" },
          { value: "dark", title: "Dark Theme" },
        ],
      },
    },
  },
  decorators: [
    (Story, context) => {
      const currentTheme =
        context.parameters.theme ?? context.globals.theme ?? defaultTheme;
      return (
        <DesignSystemProvider theme={currentTheme}>
          <StrictMode>
            <Story />
          </StrictMode>
        </DesignSystemProvider>
      );
    },
  ],
  tags: ["autodocs"],
};

export default preview;
