import { FiGithub, FiExternalLink } from "react-icons/fi";
import { StyledCard } from "./styles/Card.styled";
import TechStack from "./TechStack";
import PortfolioVisualizerDark from "../static/portfolio-visualizer.png";
import ToolTip from "./ToolTip";
import { StyledProjects } from "./styles/Projects.styled";
import { motion } from "framer-motion";

export default function Projects({ isTransition }) {
  return (
    <StyledProjects isTransition={isTransition} id="projects">
      <h2 className="title">Projects</h2>
      <div id="projectCards">
        {projectList.map((project, index) => (
          <StyledCard
            key={index}
            isTransition={isTransition}
            as={motion.div}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 70,
              damping: 10,
              mass: 0.75,
            }}
            viewport={{ once: true }}
          >
            <div id="project">
              <a
                id="projectImage"
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                <img src={project.image} />
              </a>
              <div id="body">
                <div id="header">
                  <h2 id="projectTitle">
                    <a href={project.link} target="_blank">
                      {project.title}
                    </a>
                  </h2>
                  <div id="links">
                    <ToolTip
                      text="GitHub"
                      delay="300"
                      content={
                        <a href={project.gitHubLink} target="_blank">
                          <FiGithub size={20}></FiGithub>
                        </a>
                      }
                    ></ToolTip>
                    <ToolTip
                      text="External Link"
                      delay="300"
                      content={
                        <a href={project.link} target="_blank">
                          <FiExternalLink size={20}></FiExternalLink>
                        </a>
                      }
                    ></ToolTip>
                  </div>
                </div>
                <div id="text">
                  <p className="description">{project.description}</p>
                  <TechStack
                    technologies={project.techStack}
                    isTransition={isTransition}
                  />
                </div>
              </div>
            </div>
          </StyledCard>
        ))}
      </div>
    </StyledProjects>
  );
}

const projectList = [
  {
    title: "Portfolio Visualizer",
    description:
      "An analytics tool to backtest custom stock portfolios. Provides key performance statistics such as historical return, max drawdown, and percent allocation.",
    techStack: ["JavaScript", "Bootstrap", "jQuery", "D3.js"],
    link: "https://raphaelkhy.github.io/Portfolio-Visualizer/",
    gitHubLink: "https://github.com/RaphaelKhy/Portfolio-Visualizer",
    image: PortfolioVisualizerDark,
  },
  {
    title: "Personal Website",
    description: "A website to share my experience, projects, and interests.",
    techStack: ["React", "Styed Components", "Framer Motion", "Tippy.js"],
    link: "https://raphaelkhaykin.com",
    gitHubLink: "https://github.com/RaphaelKhy/Personal-website",
  },
];
