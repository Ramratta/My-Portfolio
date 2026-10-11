import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/Resume.pdf";

const Home = () => {
  return (
    <>
      <div className="home-container" id="Home">
        <div className="home-content">
          <h1>Hi 👋I'm a</h1>
          <h2>
            <Typewriter
              options={{
                strings: [
                  '<span style="color:red">MERN Full Stack Developer!</span>',
                  '<span style="color:blue">Frontend Developer!</span>',
                  '<span style="color:yellowgreen">Backend Developer!</span>',
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <div className="home-buttons">
            <button className="btn-hire">Hire Me</button>
            <a href={Resume} className="btn-cv" download="Your_name.pdf">
              My Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
