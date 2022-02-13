import { StyledAbout } from "./styles/About.styled";
import ProfileImage from "../static/images/Profile.jpg";

export default function About(props) {
  return (
    <StyledAbout id="about" isTransition={props.isTransition}>
      <div className="aboutMeText">
        <h1>Hi, I'm Raphael</h1>
        <p>
          I'm a Software Engineer based in New York City. Currently I'm studying
          Information Systems at Stony Brook University.
        </p>
      </div>
      <div className="aboutMeImage">
        <img src={ProfileImage} />
      </div>
    </StyledAbout>
  );
}
