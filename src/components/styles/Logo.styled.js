import styled from "styled-components";
import { displayBorders } from "./Global";

export const StyledLogo = styled.div`
  ${(props) => displayBorders(props.theme)}
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 20px;
  height: 65px;
  font-size: 20px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.highContrastText};
  text-decoration: none;
  transition: color
    ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")};

  #logo {
    display: inline-block;
    color: ${(props) => props.theme.colors.highContrastText};
    text-decoration: none;
    padding-top: 0.1em;
    transition: color
      ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")};
  }

  #logo:after {
    content: "";
    width: 0px;
    height: 0.1em;
    display: block;
    background: ${(props) => props.theme.colors.link};
    transition: 300ms;
  }

  #logo:hover:after {
    width: 100%;
  }
`;