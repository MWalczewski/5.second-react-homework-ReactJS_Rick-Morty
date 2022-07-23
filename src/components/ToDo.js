import { useState } from "react";
import "./ToDo.css";

let toDoArray = [];

const ToDo = ({ logo, setLogo }) => {
  const [inputText, setInputText] = useState("");
  const [list, setList] = useState(toDoArray);

  const newToDoItem = (event) => {
    setInputText(event.target.value);
  };

  const addInputToToDo = () => {
    setList((list) => [...list, inputText]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setInputText("");
  };

  const changeLogo = () => {
    if (logo === "LOGO") {
      setLogo("New Logo");
    } else {
      setLogo("LOGO");
    }
  };

  return (
    <div className="to-do-page">
      <h4>To Do List</h4>
      <form onSubmit={onSubmit} className="input-containter">
        <input
          className="text-input"
          value={inputText}
          maxLength="20"
          onChange={newToDoItem}
        ></input>
        <button
          onClick={addInputToToDo}
          className="button"
          disabled={!inputText}
        >
          Add to the To Do List
        </button>
      </form>
      <ul>
        {list.map((word, index) => (
          <li key={index} name={word}>
            {word}
          </li>
        ))}
      </ul>

      <button onClick={changeLogo} className="button">
        Change Logo
      </button>
    </div>
  );
};

export default ToDo;
