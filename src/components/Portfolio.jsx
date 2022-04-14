import React from "react";
import IMAGES from "../images";

const Portfolio = () => {
  return (
    <div className="portfolio-container wrapper" id="portfolio">
      <div className="portfolio-nav">
        <div className="portfolio-desc">
          <p className="portfolio-heading">Portfolio</p>
          <p className="portfolio-subtext">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
            quo odit excepturi! Veritatis saepe cum libero aut, est, accusamus
            ea quisquam eos quam dolores iste sed cupiditate accusantium
            aspernatur quae?
          </p>
        </div>
        <div className="portfolio-project-nav">
          <button className="portfolio-project-btn active-portfolio-project-btn btn-start">
            All Work
          </button>
          <button className="portfolio-project-btn">Personal Project</button>
          <button className="portfolio-project-btn btn-end">
            Professional Projects
          </button>
        </div>
      </div>
      <div className="portfolio-thumbnails">
        {[0, 0, 0, 0].map((item, key) => {
          return (
            <img
              key={key}
              className="portfolio-thumbnail"
              src={IMAGES.bgOne}
              alt="project-image"
            />
          );
        })}
      </div>
      <div className="view-all-btn">
        <button className="portfolio-project-btn">View All</button>
      </div>
    </div>
  );
};

export default Portfolio;
