import { Markup } from "interweave";
import React from "react";
import info from "../assets/info";
import IMAGES from "../images";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="wrapper">
        <div className="footer-central">
          <div className="footer-center_">
            <div className="footer-center">
              <span className="footer-greeting">Lets Say Hi</span>
              <Markup className="footer-contact" content={info.contact[1][2]}/>
              <div className="footer-socials">
                <a href={info.socials.facebook} target="_blank">
                  <img
                    src={IMAGES.facbookIcon}
                    alt={info.socials.facebook}
                    srcSet=""
                    width="25"
                  />
                </a>
                <a href={info.socials.twitter} target="_blank">
                  <img
                    src={IMAGES.twitterIcon}
                    alt={info.socials.twitter}
                    srcSet=""
                    width="25"
                  />
                </a>
                <a href={info.socials.instagram} target="_blank">
                  <img
                    src={IMAGES.instagramIcon}
                    alt={info.socials.instagram}
                    srcSet=""
                    width="25"
                  />
                </a>
              </div>
            </div>
            <img
              src={IMAGES.footerDecoration}
              className="footer-decoration"
              alt=""
            ></img>
          </div>
        </div>
      </div>
      <div className="line-1"></div>
      <div className="footer-copyright">
        &copy; {new Date().getFullYear()} - M3 District - All right reserved
      </div>
    </footer>
  );
};

export default Footer;
