import React from "react";
import "./Main.css";
import BackImg from "./components/backImage/BackImg";
import Experience from "./components/experience/Experience";
import AboutMe from "./components/aboutMe/AboutMe";
function Main() {
  return (
    <div style={{ width: "100%" }} className="mainC">
      <BackImg />
      <AboutMe />
    </div>
  );
}

export default Main;
