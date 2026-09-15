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
            <FcHome title="Home" size={30} />
          </div>
          <div className="nav-lin">
            <FcAbout title="About" size={30} />
          </div>
          <div className="nav-lin">
            <FcPortraitMode title="Work Experience" size={30} />
          </div>
          <div className="nav-lin">
            <FcBiotech title="Tech Stack" size={30} />
          </div>
          <div className="nav-lin">
            <FcReadingEbook title="Education" size={30} />
          </div>
          <div className="nav-lin">
            <FcVideoProjector title="Project" size={30} />
          </div>
          <div className="nav-lin">
            <FcVoicePresentation title="Testimonial" size={30} />
          </div>
          <div className="nav-lin">
            <FcBusinessContact title="Contact" size={30} />
          </div>
        </div>
      ) : (
        <div className="navbar">
          <div className="navbar-profile-page">
            <img src={img} alt="ProfessionalImage" />
          </div>
          <div className="Nav">
            <div className="nav-link">
              <FcHome size={30} />
              Home
            </div>
            <div className="nav-link">
              <FcAbout size={30} />
              About
            </div>
            <div className="nav-link">
              <FcPortraitMode size={30} /> Work Experience
            </div>
            <div className="nav-link">
              <FcBiotech size={30} />
              Tech Stack
            </div>
            <div className="nav-link">
              <FcReadingEbook size={30} />
              Education
            </div>
            <div className="nav-link">
              <FcVideoProjector size={30} /> Project
            </div>
            <div className="nav-link">
              <FcVoicePresentation size={30} /> Testimonial
            </div>
            <div className="nav-link">
              <FcBusinessContact size={30} /> Contact
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
