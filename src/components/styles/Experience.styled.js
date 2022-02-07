import styled from "styled-components";
import { displayBorders } from "./Global";

export const StyledExperience = styled.div`
  ${(props) => displayBorders(props.theme)}
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${(props) => props.theme.colors.highContrastText};

  #title {
    display: flex;
    justify-content: center;
    font-weight: 500;
    ${(props) => displayBorders(props.theme)}
  }

  #container {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  #Company {
    display: flex;
    flex-direction: column;
    column-gap: 20px;
    ${(props) => displayBorders(props.theme, "black")}
    width: 30%;
    margin-right: 1rem;
    #CompanyName {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: start;
      flex-wrap: wrap;
      column-gap: 1rem;
      ${(props) => displayBorders(props.theme)}
      img {
        height: 36px;
      }
      a {
        color: ${(props) => props.theme.colors.highContrastText};
        text-decoration: none;
      }
      h2 {
        font-weight: 500;
      }
    }
    #CompanyDates {
      ${(props) => displayBorders(props.theme)}
      color: ${(props) => props.theme.colors.lowContrastText};
    }
  }

  #body {
    #ExperienceTitle {
      display: flex;
      flex-direction: column;
      justify-content: center;
      ${(props) => displayBorders(props.theme)}
      font-weight: 500;
    }
  }

`;