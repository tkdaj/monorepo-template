// TODO: decide whether I should define each option for spacing
// or just allow the user of the component lib to define their "base"
// spacing unit, and then use multiples. For example:

/*
// within theme config:
baseSpacingUnit: '0.25em'

// within component -- this means calc(3 * 0.25em) for all four margins"
<Box m={3}> </Box>
*/

// export interface SpacingConfig {
//   xs: string;
//   sm: string;
//   md: string;
//   lg: string;
//   xl: string;
// }

// export const defaultSpacing = {
//   xs: "2px",
//   sm: "576px",
//   md: "768px",
//   lg: "992px",
//   xl: "1200px",
// } as const satisfies SpacingConfig;

export {};
