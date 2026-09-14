import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/Resume.pdf";

const Home = () => {
  return (
    <>
      <div className="container-fluid home-container">
        <div className="container home-content">
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
              // onInit={(typewriter) => {
              //   typewriter.callFunction(() => setColor(colors[0])).start();
              // }}
            />
          </h2>
          <div className="home-buttons">
            <button className="btn btn-hire">Hire Me</button>
            <a href={Resume} className="btn btn-cv" download="Your_name.pdf">
              My Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
