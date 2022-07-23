import AboutMe from "./AboutMe";
import aboutMeDetails from "./AboutMeData";
import image from "../image.png";
import ToDo from "./ToDo";
import Contact from "./Contact";
import CharList from "./CharactersList";
import Home from "./Home";
import "./Page.css";

const Page = ({ clickedButton, logo, setLogo }) => {
  switch (clickedButton) {
    case "O mnie":
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
    case "Lista postaci":
      return (
        <div className="page">
          <CharList />
        </div>
      );
    case "To Do":
      return (
        <div className="page">
          <ToDo logo={logo} setLogo={setLogo} />
        </div>
      );
    case "Contact":
      return (
        <div className="page">
          <Contact />
        </div>
      );
    default:
      return (
        <div className="page">
          <Home />
        </div>
      );
  }
};

export default Page;
