import React from "react";
import info from "../assets/info";
import IMAGES from "../images";

const CallToAction = () => {
  return (
    <div className="call-to-action" id="about-me">
      <div className="left-item">
        <span className="port-welcome">Welcome I'M</span>
        <span className="port-name">{info.profile.name}</span>
        <span className="port-title">{info.profile.position}</span>
        <span className="port-sitation">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          dicta dolorem, quae expedita pariatur ab animi unde, non natus cumque
          nostrum quisquam illum, facilis assumenda saepe. Nesciunt cupiditate
          placeat quam.
        </span>
      </div>
      <div className="cover-image-zone">
        <img
          src={IMAGES.coverImage}
          alt="cover-image-miebaka"
          className="port-cover-image"
        />
        <img
          src={IMAGES.coverImageBG}
          alt=""
          className="port-cover-image-bg"
        />
      </div>
      <div className="side-bar-socials">
        <span className="side-bar-title">FOLLOW ME ON:</span>
        <span className="side-bar-line"></span>
        <span className="side-bar-social">
          <a href={info.socials.facebook} target="_blank">
            <i className="mdi mdi-facebook"></i>
          </a>
        </span>
        <span className="side-bar-social">
          <a href={info.socials.twitter} target="_blank">
            <i className="mdi mdi-twitter"></i>
          </a>
        </span>
        <span className="side-bar-social">
          <a href={info.socials.linkedin} target="_blank">
            <i className="mdi mdi-linkedin"></i>
          </a>
        </span>
      </div>
    </div>
  );
};

export default CallToAction;
