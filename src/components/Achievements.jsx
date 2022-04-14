import React from "react";
import info from "../assets/info";

const Achievements = () => {
  return (
    <div className="achievement-wrapper" id="achievement">
      <div className="wrapper">
        <div className="testimony-card">
          {info.experience.map((item, key) => {
            return (
              <div key={key} className={item[3]}>
                <div className="testimony">
                  <span className="testimony-number">{item[0]}</span>
                  <span className="testimony-title">{item[1]}</span>
                </div>
                <i className={[item[2]]}></i>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
