import { StyledProjects } from "./styles/Projects.styled";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { StyledCard } from "./styles/Card.styled";
import TechStack from "./TechStack";
import PortfolioVisualizerLight from "../static/images/PortfolioVisualizerLight.png";

export default function Projects() {
  return (
    <StyledProjects id="projects">
      <h1 className="title">Projects</h1>
      {projectData.map((project) => (
        <div id="project">
          <h2 id="projectTitle">{project.title}</h2>
          <StyledCard>
            <div id="text">
              <p>{project.description}</p>
              <TechStack technologies={project.techStack} />
              <a href={project.gitHubLink} target="_blank">
                <FiGithub size={20}></FiGithub>
              </a>
              <a href={project.link} target="_blank">
                <FiExternalLink size={20}></FiExternalLink>
              </a>
            </div>
            <div id="projectImage">
              <a href={project.link} target="_blank">
                <img src={project.image} />
              </a>
            </div>
          </StyledCard>
        </div>
      ))}
    </StyledProjects>
  );
}

const projectData = [
  {
    title: "Portflio Visualizer",
    description:
      "A single page web application to create and backtest custom stock portfolios.",
    techStack: ["JavaScript", "Bootstrap", "D3.js", "jQuery"],
    link: "https://raphaelkhy.github.io/",
    gitHubLink: "https://github.com/RaphaelKhy/RaphaelKhy.github.io",
    image: PortfolioVisualizerLight,
  },
];
