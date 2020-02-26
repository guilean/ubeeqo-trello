import React, { useState } from "react";
import Card from "../../common/Card";
import { FaPlus } from "react-icons/fa";

function BoardCreator({ createBoard }) {
  const [name, setName] = useState("");

  const onChangeInput = e => {
    setName(e.target.value);
  };

  const onSubmitCreateBoard = e => {
    if (name === "") {
      return;
    }
    createBoard(name);
    setName("");
    e.preventDefault();
  };

  return (
    <div id="board-creator">
      <form onSubmit={onSubmitCreateBoard}>
        <input
          autoFocus
          placeholder={"Add a new board ✏️"}
          className="textfield"
          type="text"
          value={name}
          onChange={onChangeInput}
        />
      </form>
    </div>
  );
}

export default BoardCreator;
