import styled from "styled-components";
import { displayBorders } from "./Global";

export const StyledBody = styled.div`
  ${(props) => displayBorders(props.theme, "black")}
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  margin-right: 1rem;
`;
