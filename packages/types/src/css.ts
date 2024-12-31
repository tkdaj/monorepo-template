import type { css } from "styled-components";
type MeasurementUnit = "px" | "em" | "rem" | "%";
export type CssMeasurement = 0 | `${number}${MeasurementUnit}`;
export type CssDefinition = ReturnType<typeof css>;
