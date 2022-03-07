import styled from "styled-components";

export const StyledThemeButton = styled.div`
  #button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: unset;
    background-color: unset;
    border-radius: 0.5rem;
    height: 47px;
    width: 47px;
    color: ${(props) => props.theme.colors.brightFont};
    transition: color
      ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")};
    :hover {
      cursor: pointer;
      background-color: ${(props) => props.theme.colors.buttonHover};
      transition: background-color
          ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")},
        color
          ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")};
    }
    #svg {
      height: 20px;
      width: 20px;
    }
  }
`;
