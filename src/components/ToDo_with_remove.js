import { useState } from "react";

let toDoArray = [];

const ToDo = ({ logo, setLogo }) => {
  const [inputText, setInputText] = useState("");
  const [list, setList] = useState(toDoArray);

  const newToDoItem = (event) => {
    setInputText(event.target.value);
  }; //ok - ustala wartosc z inputu do dodania do listy

  const addInputToToDo = () => {
    // setList(toDoArray.push(inputText));
    setList((list) => [...list, inputText]);
    // setList(list.push(inputText));
  }; // ok - dodaje wart z inputu do lsity

  const onSubmit = (e) => {
    e.preventDefault();
    setInputText("");
  };

  const removeItem = (e) => {
    const item = e.target.getAttribute("name");
    console.log(e.target.getAttribute("name"));
    console.log(e.target);

    // setList(list.filter((word, index) => item.index !== index));
    // setList(list.filter((item) => item !== item));
  };

  const changeLogo = () => {
    if (logo === "LOGO") {
      setLogo("New Logo");
    } else {
      setLogo("LOGO");
    }
  };

  const check = () => {
    console.log("list: ", list);
    console.log("todoarray: ", toDoArray);
  };

  return (
    <>
      <h4>To Do List</h4>
      <form onSubmit={onSubmit}>
        <input value={inputText} onChange={newToDoItem}></input>
        <button onClick={addInputToToDo}>Add to the To Do List</button>
      </form>
      <ul>
        To Do List:
        {list.map((word, index) => (
          <li key={index} onClick={removeItem} name={word}>
            {word}
          </li>
        ))}
      </ul>
      <button onClick={check}>Check</button>
      <button onClick={changeLogo}>Change Logo</button>
    </>
  );
};

export default ToDo;
