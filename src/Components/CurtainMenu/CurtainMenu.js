import React, { useState, useEffect } from "react";
import "./CurtainMenu.css";
import Menu from "./menu.svg";

export default function CurtainMenu() {
  const [toggleNav, setToggleNav] = useState(false);

  const [checkWidth, setCheckWidth] = useState(window.innerWidth);

  const checkFunc = () => {
    console.log(checkWidth);
    setCheckWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkFunc);

    return () => {
      window.removeEventListener("resize", checkFunc);
    };
  }, []);

  const toggleNavFunc = () => {
    setToggleNav(!toggleNav);
  };

  return (
    <>
      {checkWidth < 900 && (
        <button onClick={toggleNavFunc} className="floating-btn">
          <img src={Menu} />
        </button>
      )}

      <nav className={toggleNav ? "active" : ""}>

        {checkWidth < 900 && (
          <button 
          onClick={toggleNavFunc} className="close-curtain">
            X
          </button>
        )}

        <a href="#">HOME</a>
        <a href="#">SERVICES</a>
        <a href="#">CONTACT US</a>
      </nav>
    </>
  );
}
