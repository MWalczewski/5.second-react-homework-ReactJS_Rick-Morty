import { useState } from "react";
import "./AboutMe.css";

const AboutMe = ({ aboutMeData, picture, logo, setLogo }) => {
  const { firstName, lastName, description } = aboutMeData;
  const [inputText, setInputText] = useState("");

  const textToAddToLogo = (e) => {
    setInputText(e.target.value);
  };

  const addTextToLogo = () => {
    setLogo(`${logo}${inputText}`);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setInputText("");
  };

  return (
    <div className="about-me-page">
      <span className="about-me-container">
        <img className="about-me-image" src={picture} alt="randomPicture" />
        <h4>
          Nazywam się {firstName} {lastName}.
        </h4>
        <p>{description}</p>
      </span>
      <div className="update-logo">
        <h4>Update Logo with text from input below</h4>
        <form className="update-logo-form" onSubmit={onSubmit}>
          <input
            className="update-logo-input"
            value={inputText}
            maxLength="20"
            onChange={textToAddToLogo}
            placeholder="write text to add to input"
          ></input>
          <button className="update-logo-button" onClick={addTextToLogo}>
            Update!
          </button>
        </form>
      </div>
    </div>
  );
};

export default AboutMe;
