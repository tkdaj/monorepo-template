import { ThemeProvider } from "styled-components";
import type { DesignSystem } from "types";

// TODO: update this to allow user's of the design system to just directly access
// theme.colors.primary, for example, and return the color string instead of the object.

// type State = {
//   [key: string]: string;
// };

// type ColorConfig = {
//   color: string;
//   states: State;
// };

// type ColorsConfig = {
//   [key: string]: ColorConfig;
// };

// function createObject<T extends ColorsConfig>(colors: T): { [K in keyof T]: string & { state: T[K]['states'] } } {
//   const handler: ProxyHandler<any> = {
//     get(target, prop, receiver) {
//       if (typeof target[prop] === 'object' && target[prop] !== null) {
//         // Wrap nested objects in a proxy to maintain dynamic behavior
//         return new Proxy(target[prop], handler);
//       }
//       return target[prop];
//     },
//     apply(target, thisArg, args) {
//       // If called directly, return the color value
//       return target.color;
//     }
//   };

//   const createProxy = (color: string, states: State) => {
//     const baseObject = { color, state: states };
//     return new Proxy(baseObject, handler);
//   };

//   const obj: any = {};
//   for (const [key, value] of Object.entries(colors)) {
//     obj[key] = createProxy(value.color, value.states);
//   }
//   return obj;
// }

// // Define your colors and states
// const colors = {
//   primary: {
//     color: 'blue',
//     states: {
//       hover: 'lightblue',
//       disabled: 'gray'
//     }
//   },
//   secondary: {
//     color: 'green',
//     states: {
//       hover: 'lightgreen',
//       disabled: 'darkgray'
//     }
//   }
// };

// // Create the object
// const myObj = createObject(colors);

// // TypeScript ensures proper typing
// console.log(myObj.primary); // Output: blue
// console.log(myObj.primary.state.hover); // Output: lightblue
// console.log(myObj.secondary); // Output: green
// console.log(myObj.secondary.state.disabled); // Output: darkgray

interface DesignSystemProviderProps
  extends React.PropsWithChildren<{
    themeConfig: DesignSystem.ThemeConfig;
  }> {}
export function DesignSystemProvider({
  children,
  themeConfig,
}: DesignSystemProviderProps) {
  return <ThemeProvider theme={themeConfig}>{children}</ThemeProvider>;
}
