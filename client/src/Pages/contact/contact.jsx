import React from "react";
import conim from "../../assets/Image/contact.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import "./contact.css";

const contact = () => {
  return (
    <div className="one">
      <div className="two">
        <div className="three">
          <img src={conim} alt="" />
        </div>
        <div className="three1">
          <p>
            Contact With
            <FaGithub size={40} />
            <FaLinkedin color="blue" size={40} />
            <p className="OR">OR</p>
          </p>
          <div className="hi">
            <div className="hi1">
              <input
                type="text"
                name="name"
                placeholder="Enter your Name"
                className="input"
                style={{ height: "50px", padding: "10px" }}
              />
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email Address"
                className="input"
                style={{ height: "50px", padding: "10px" }}
              />
              <textarea
                name="message"
                placeholder="Write your message"
                rows={4}
                className="input1"
              />
              <div className="bt">
                <button className="btn">SEND MESSAGE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
