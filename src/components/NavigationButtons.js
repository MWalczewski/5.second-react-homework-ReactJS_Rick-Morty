import buttonNames from "./NavigationButtonsNames";

const NavigationButtons = ({ setClickedButton }) => {
  const NaviButtonClick = (event) => {
    setClickedButton(event.target.name.toString());
  };

  return buttonNames.map((buttonName, i) => {
    return (
      <button
        className="navigation-button"
        key={i}
        onClick={NaviButtonClick}
        name={buttonName}
      >
        {buttonName}
      </button>
    );
  });
};

export default NavigationButtons;
