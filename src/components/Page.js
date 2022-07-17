import { useState } from "react";
import AboutMe from "./AboutMe";
import aboutMeDetails from "./AboutMeData";
import image from "../image.png";
import ToDo from "./ToDo";
import Contact from "./Contact";
import CharList from "./CharactersList";
import Home from "./Home";
import "./Page.css";

const Page = ({ clickedButton, logo, setLogo }) => {
  if (clickedButton === "O mnie") {
    return (
      <div className="page">
        <AboutMe
          aboutMeData={aboutMeDetails}
          picture={image}
          logo={logo}
          setLogo={setLogo}
        />
      </div>
    );
  } else if (clickedButton === "Lista postaci") {
    return (
      <div className="page">
        <CharList />
      </div>
    );
  } else if (clickedButton === "To Do") {
    return (
      <div className="page">
        <ToDo logo={logo} setLogo={setLogo} />
      </div>
    );
  } else if (clickedButton === "Contact") {
    return (
      <div className="page">
        <Contact />
      </div>
    );
  } else if (clickedButton === "") {
    return (
      <div className="page">
        <Home />
      </div>
    );
  } else {
    return (
      <div className="page">
        <Home />
      </div>
    );
  }
};

export default Page;
