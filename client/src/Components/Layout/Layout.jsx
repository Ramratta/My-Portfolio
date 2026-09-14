import React, { useState } from "react";
import Home from "../../Pages/Home/Home";
import Menu from "../Menus/Menu";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import "./Layout.css";

const Layout = () => {
  const [troggle, setTroggle] = useState(true);

  const handleTroggle = () => {
    setTroggle(!troggle);
  };
  return (
    <>
      <div className="sidebar-section">
        <div className={troggle ? "sidebar" : "sidebar-troggle"}>
          <div className="sidebar-troggle-icons">
            <p onClick={handleTroggle}>
              {troggle ? (
                <AiOutlineDoubleRight size={30} />
              ) : (
                <AiOutlineDoubleLeft size={30} />
              )}
            </p>
          </div>
          <Menu toggle={troggle} />
        </div>
        <Home />
      </div>
    </>
  );
};

export default Layout;
