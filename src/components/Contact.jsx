import React, { useEffect } from "react";
import info from "../assets/info";
import swal from "sweetalert";
import { Markup } from "interweave";

const Contact = () => {
  const submitBudget = () => {
    swal(
      "Message Delivery Failed",
      "Sorry, We could not deliver your message. However, you can send us a message directly to my email. \n I cant wait to hear from you.",
      "error"
    );
  };

  return (
    <div className="portfolio-contact wrapper" id="contact-me">
      <div className="contact-us">
        <span className="contact-us-title">Contact Us</span>
        <span className="contact-us-desc mt">
          Am so glad you got through my portfolio, Do leave a message if you
          need a software product. You are guaranteed a scalable application.{" "}
        </span>
        <div className="port-contact-items">
          {info.contact.map((item, key) => {
            return (
              <div key={key} className="port-contact-item">
                <i className={item[0]}></i>
                <div className="port-contact-item-details">
                  <span className="port-contact-header">{item[1]}</span>
                  <Markup content={item[2]} />
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
            required
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
