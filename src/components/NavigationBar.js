import NavigationButtons from "./NavigationButtons";

const NavigationBar = ({ logo, clickedButton, setClickedButton }) => {
  return (
    <div className="navigation-bar">
      <span className="logo">{logo}</span>

      <div>
        <NavigationButtons
          clickedButton={clickedButton}
          setClickedButton={setClickedButton}
        />
      </div>
    </div>
  );
};

export default NavigationBar;
