import homeImage from "../home_image.png";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <h1>Welcome to Rick and Morty world.</h1>
      <img src={homeImage} className="home-image" alt="home-page-logo" />
    </div>
  );
};

export default Home;
