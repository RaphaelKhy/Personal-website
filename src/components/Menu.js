import { StyledMenu } from "./styles/Menu.styled";
import resume from "../static/resume.pdf";
import ThemeButton from "./ThemeButton";

export default function Menu(props) {
  return (
    <StyledMenu isTransition={props.isTransition}>
      <a href="/#experience" onClick={HandleClick}>
        Experience
      </a>
      <a href="/#projects" onClick={HandleClick}>
        Projects
      </a>
      <a href="/#contact" onClick={HandleClick}>
        Contact
      </a>
      <a href={resume} target="blank">
        Resume
      </a>
      <ThemeButton
        handleToggle={props.handleToggle}
        isTransition={props.isTransition}
      ></ThemeButton>
    </StyledMenu>
  );
}

export const HandleClick = (e) => {
  e.preventDefault();
  var target = e.target.getAttribute("href").substring(2);
  const location = document.getElementById(target).offsetTop;
  window.scrollTo({
    left: 0,
    top: location - 65,
  });
};