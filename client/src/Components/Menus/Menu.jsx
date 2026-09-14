import React from "react";
import {
  FcHome,
  FcAbout,
  FcPortraitMode,
  FcBiotech,
  FcReadingEbook,
  FcVideoProjector,
  FcVoicePresentation,
  FcBusinessContact,
} from "react-icons/fc";
import img from "../.././assets/Image/professional image.png";
import "./Menu.css";

const Menu = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <div className="nav-li">
          <div className="nav-lin">
            <FcHome title="Home" />
          </div>
          <div className="nav-lin">
            <FcAbout title="About" />
          </div>
          <div className="nav-lin">
            <FcPortraitMode title="Work Experience" />
          </div>
          <div className="nav-lin">
            <FcBiotech title="Tech Stack" />
          </div>
          <div className="nav-lin">
            <FcReadingEbook title="Education" />
          </div>
          <div className="nav-lin">
            <FcVideoProjector title="Project" />
          </div>
          <div className="nav-lin">
            <FcVoicePresentation title="Testimonial" />
          </div>
          <div className="nav-lin">
            <FcBusinessContact title="Contact" />
          </div>
        </div>
      ) : (
        <div className="navbar">
          <div className="navbar-profile-page">
            <img src={img} alt="ProfessionalImage" />
          </div>
          <div className="Nav">
            <div className="nav-link">
              <FcHome />
              Home
            </div>
            <div className="nav-link">
              <FcAbout />
              About
            </div>
            <div className="nav-link">
              <FcPortraitMode /> Work Experience
            </div>
            <div className="nav-link">
              <FcBiotech />
              Tech Stack
            </div>
            <div className="nav-link">
              <FcReadingEbook />
              Education
            </div>
            <div className="nav-link">
              <FcVideoProjector /> Project
            </div>
            <div className="nav-link">
              <FcVoicePresentation /> Testimonial
            </div>
            <div className="nav-link">
              <FcBusinessContact /> Contact
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
