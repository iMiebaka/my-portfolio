import React from "react";
import IMAGES from "../images";
import projects from "./projects";
import ProjectDetails from "./projects/ProjectDetails";

const Portfolio = () => {
  return (
    <div className="portfolio-container wrapper" id="portfolio">
      <div className="portfolio-nav">
        <div className="portfolio-desc">
          <p className="portfolio-heading">Portfolio</p>
          <p className="portfolio-subtext">
            Here are some of my finished task I have carried out in the last couple of
            years. Live project are indicated with {" "}
            <i className="mdi mdi-access-point-network"></i>
            <br/>
            While {" "}
            <i className="mdi mdi-github-circle"></i> are on my Github page.
          </p>
        </div>
        {/* <div className="portfolio-project-nav">
          <button className="portfolio-project-btn active-portfolio-project-btn btn-start">
            All Work
          </button>
          <button className="portfolio-project-btn">Personal Project</button>
          <button className="portfolio-project-btn btn-end">
            Professional Projects
          </button>
        </div> */}
      </div>
      <div className="portfolio-thumbnails">
        {projects.map((item, key) => {
          return (
            <a
              key={key}
              href={item.link}
              className="portfolio-thumbnail-cover"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="portfolio-thumbnail"
                src={item.cover_image}
                alt={item.projectName}
              />
              <div className="portfolio-thumbnail-details">
                <ProjectDetails
                  title={item.projectName}
                  desc={item.details.body}
                  tech={item.details.tools}
                  live={item.live}
                />
              </div>
            </a>
          );
        })}
      </div>
      {/* <div className="view-all-btn">
        <button className="portfolio-project-btn">View All</button>
      </div> */}
    </div>
  );
};

export default Portfolio;
