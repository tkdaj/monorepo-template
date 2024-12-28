import styled from "styled-components";

export const Button = styled.button.attrs(({ type = "button", ...props }) => ({
  ...props,
  type,
}))`
  padding-inline: 20px;
  padding-block: 12px;
  font-size: 20px;
`;
