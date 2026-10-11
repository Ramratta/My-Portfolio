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
              <a href="#Home">
                <FcHome size={30} />
              </a>
              <a href="#Home">Home</a>
            </div>
            <div className="nav-link">
              <a href="#about">
                <FcAbout size={30} />
              </a>
              <a href="#about">About</a>
            </div>
            <div className="nav-link">
              <a href="#Education">
                <FcPortraitMode size={30} />
              </a>
              <a href="#Education">Work Experience</a>
            </div>
            <div className="nav-link">
              <a href="#Tech">
                <FcBiotech size={30} />
              </a>
              <a href="#Tech">Tech Stack</a>
            </div>
            <div className="nav-link">
              <a href="#Education">
                <FcReadingEbook size={30} />
              </a>
              <a href="#Education">Education</a>
            </div>
            <div className="nav-link">
              <a href="#Project">
                <FcVideoProjector size={30} />
              </a>
              <a href="#Project">Project</a>
            </div>
            <div className="nav-link">
              <FcVoicePresentation size={30} /> Testimonial
            </div>
            <div className="nav-link">
              <a href="#Contact">
                <FcBusinessContact size={30} />
              </a>
              <a href="#Contact">Contact</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
