import React from "react";
import "./TechStack.css";
import { TechStackList } from "../../utils/TechStacklist";

const TechStack = () => {
  return (
    <>
      <div className="Tech" id="Tech">
        <div className="techn">
          <div className="t text-uppercase">
            <h1>Technologies Used</h1>
          </div>
          <p>
            👉including Programming Languages,fireworks,Databases, FrontEnd and
            BackEnd tools, And APIS
          </p>
        </div>
        <div className="ro">
          {TechStackList.map((tech) => (
            <div className="tech-items" key={tech._id}>
              <div className="row1">
                <tech.icon color={tech.color} className="icon" size={30} />
                <p>{tech.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TechStack;
