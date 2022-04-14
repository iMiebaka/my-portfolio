import React, { useEffect } from "react";
import info from "../assets/info";

const Contact = () => {
  const submitBudget = () => {};

  return (
    <div className="portfolio-contact wrapper" id="contact-me">
      <div className="contact-us">
        <span className="contact-us-title">Contact Us</span>
        <span className="contact-us-desc mt">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure rem,
          repudiandae quibusdam explicabo debitis aliquid perferendis magni at
          dolorum est repellat eius excepturi commodi unde harum quisquam, sint
          consequatur! Aspernatur!
        </span>
        <div className="port-contact-items">
          {info.contact.map((item, key) => {
            return (
              <div key={key} className="port-contact-item">
                <i className={item[0]}></i>
                <div className="port-contact-item-details">
                  <span className="port-contact-header">{item[1]}</span>
                  <span className="port-contact-info">{item[2]}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="drop-a-line" method="POST" action="">
        <span className="contact-us-title">Drop a Line</span>
        <div className="make-column">
          <input
            type="text"
            name="name"
            id=""
            className="input-fixes pr mt"
            placeholder="Name"
          />
          <input
            type="email"
            name="email"
            id=""
            className="input-fixes pr ml mt"
            placeholder="Email"
          />
        </div>
        <div className="make-column">
          <input
            type="text"
            name="phone"
            id=""
            className="input-fixes pr mt"
            placeholder="Phone#"
          />
          <input
            type="text"
            name="budget"
            id=""
            className="input-fixes pr ml mt"
            placeholder="Budget"
          />
        </div>
        <textarea
          name=""
          className="input-fixes pr mt"
          id="message"
          rows="5"
          placeholder="Message"
        ></textarea>
        <button
          onClick={submitBudget}
          className="portfolio-project-btn send-message-btn"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
