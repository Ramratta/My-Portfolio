import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";

const Education = () => {
  return (
    <>
      <div className="Ed">
        <p className="E">
          <h3>Education & Qualifications</h3>
        </p>

        <VerticalTimeline className="div">
          <VerticalTimelineElement
            className="div1"
            iconStyle={{ background: "black", color: "whitesmoke" }}
            contentStyle={{ background: "rgb(179, 177, 177)", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2022-2026"
            icon={<FaGraduationCap />}
          >
            <h3 className="vertical-timeline-element-title">
              B.Tech in Computer Science
            </h3>
            <h4 className="idiv1">Giet University</h4>
            <p>
              Bachelor of Technology in Computer Science and Engineering, with a
              focus on web development, programming, and software development.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="div1"
            iconStyle={{ background: "black", color: "whitesmoke" }}
            contentStyle={{ background: "rgb(179, 177, 177)", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2022-2026"
            icon={<FaGraduationCap />}
          >
            <h3 className="vertical-timeline-element-title">
              Higher Secondary Education (12th)
            </h3>
            <h4 className="idiv1">H.N. Inter College</h4>
            <p>60% aggregate · Bihar Board</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="div1"
            iconStyle={{ background: "black", color: "whitesmoke" }}
            contentStyle={{ background: "rgb(179, 177, 177)", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2018-2020"
            icon={<FaGraduationCap />}
          >
            <h3 className="vertical-timeline-element-title">
              Secondary Education (10th)
            </h3>
            <h4 className="idiv1">Vishwas Convent School</h4>
            <p>75% aggregate · Haryana Board</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
