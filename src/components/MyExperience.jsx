import React, { useEffect } from "react";
import info from "../assets/info";

const MyExperience = () => {
  return (
    <div className="myexperience-wrapper" id="experience">
      <div className="wrapper">
        <div className="myexperience-heading">
          <span className="myexperience-header">My Experiences</span>
          <span className="myexperience-desc">
            {info.expirenceSummary}
          </span>
        </div>
        <div className="myexperience-timelines">
          {info.timeline.map((item, key) => {
            return (
              <div key={key} className="myexperience-timeline">
                <div className={item.bodyType}>
                  <div className="myexperience-line">
                    <span className="myexperience-line-head"></span>
                    <span className="myexperience-line-tail"></span>
                  </div>
                  <div className="myexperience-container">
                    <div className="myexperience-title">{item.title}</div>
                    <div className="myexperience-sub-text">
                      {item.body}
                    </div>
                  </div>
                </div>
                {/* <div className="myexperience-polygon-line"></div> */}
                <div className="myexperience-polygon">{item.year}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyExperience;
