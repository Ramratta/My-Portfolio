import React from "react";
import "./Project.css";
import img from "../assets/Image/Screenshot 2026-09-14 185603.png";
import Ecomm from "../assets/Image/E-commerce.png";
import mov from "../assets/Image/movie.png";
import expen from "../assets/Image/exp.png";

const Project = () => {
  return (
    <>
      <div className="mai">
        <div className="mains">
          <p className="text-uppercase">
            <h3>Featured Project</h3>
          </p>
          <h6>
            👉A full-stack MERN project showcasing modern web development,
            responsive design, and real-world functionality.
          </h6>
        </div>
        <div className="mains1">
          <div className="div1">
            <img src={img} alt="Project Screenshort" />
            <div className="ite">Frontend</div>
            <div className="i">
              <div className="All">
                <div className="it">HTML</div>
                <div className="it">CSS</div>
                <div className="it">JAVASCRIPT</div>
              </div>
              <div style={{ padding: 5, fontSize: 30, fontWeight: "Medium" }}>
                Color Gradient Generator
              </div>
              <a
                href="https://cerulean-sprite-b2ca80.netlify.app/"
                target="_blank"
                rel="noreferrer"
                style={{
                  background: "skyblue",
                  width: 100,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className="it"
              >
                VEIW
              </a>
            </div>
          </div>
          <div className="div1">
            <img src={Ecomm} alt="Project Screenshort" />
            <div className="ite">Full Stack</div>
            <div className="i">
              <div className="All">
                <div className="it">REACT</div>
                <div className="it">NODE</div>
                <div className="it">EXPRESS</div>
                <div className="it">MONGODB</div>
              </div>
              <div style={{ padding: 5, fontSize: 30, fontWeight: "Medium" }}>
                MERN Stack E-Commerce Website
              </div>
              <a
                href="https://dainty-rabanadas-092edb.netlify.app/"
                target="_blank"
                style={{
                  background: "skyblue",
                  width: 100,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className="it"
                rel="noreferrer"
              >
                VEIW
              </a>
            </div>
          </div>
          <div className="div1">
            <img src={mov} alt="Project Screenshort" />
            <div className="ite">Frontend React</div>
            <div className="i">
              <div className="All">
                <div className="it">JAVASCRIPT</div>
                <div className="it">CSS</div>
                <div className="it">React</div>
                <div className="it">OMDb API</div>
              </div>
              <div style={{ padding: 5, fontSize: 30, fontWeight: "Medium" }}>
                Movie Explorer Movie Search Web Application
              </div>
              <a
                href="https://ephemeral-beignet-e694b1.netlify.app/"
                target="_blank"
                style={{
                  background: "skyblue",
                  width: 100,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className="it"
                rel="noreferrer"
              >
                VEIW
              </a>
            </div>
          </div>
          <div className="div1">
            <img src={expen} alt="Project Screenshort" />
            <div className="ite">Frontend</div>
            <div className="i">
              <div className="All">
                <div className="it">HTML</div>
                <div className="it">CSS</div>
                <div className="it">JAVASCRIPT</div>
              </div>
              <a
                href="https://bugets.netlify.app/"
                target="_blank"
                rel="noreferrer"
                style={{
                  background: "skyblue",
                  width: 100,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className="it"
              >
                VEIW
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
