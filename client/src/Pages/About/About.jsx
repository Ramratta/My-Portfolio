import React from "react";
import img from "../../assets/Image/professional image.png";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="rows">
        <div className="about-img">
          <img src={img} alt="Profile Pic" />
        </div>
        <div className="Ab1">
          <div className="Ab">
            <h1>About me</h1>
          </div>
          <p>
            Hi, I'm Ram Ratan Pandey, a passionate MERN Full Stack Developer.
            I'm a Computer Science graduate with a strong interest in web
            development. I enjoy creating modern, responsive, and user-friendly
            web applications. My main technologies include HTML, CSS,
            JavaScript, and React.js. On the backend, I work with Node.js,
            Express.js, and MongoDB. I also have experience with Tailwind CSS,
            Git, and GitHub. I have a good understanding of REST APIs and CRUD
            operations. I enjoy building reusable components and clean user
            interfaces. I have developed projects including an E-Commerce
            Platform. The project includes product listings, shopping cart, and
            order management. I have also worked on an Alumni Management System.
            It includes features for events and job management. My development
            training has given me practical programming experience. I enjoy
            solving problems and learning new technologies. I believe in writing
            clean and maintainable code. I'm always looking for opportunities to
            improve my development skills. My goal is to become a skilled Full
            Stack Developer. I want to work on real-world applications and
            challenging projects. I'm passionate about turning ideas into
            functional web experiences. Let's build something great together.!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
