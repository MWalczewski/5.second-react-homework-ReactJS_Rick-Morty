import { useState, useEffect } from "react";
import "./CharactersList.css";

const CharList = () => {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character?page=1")
      .then((resp) => resp.json())
      .then((json) => setChars(json.results));
  });

  return (
    <div className="char-page">
      {chars.map((char) => {
        let { id, name, status, species, image } = char;
        return (
          <div className="char-card" key={id}>
            <img src={image} alt="Character's avatar" />
            <div className="char-name">Name: {name} </div>
            <div className="char-stats">Status: {status}</div>
            <div className="char-stats">Species: {species}</div>
          </div>
        );
      })}
    </div>
  );
};

export default CharList;
