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
      <Card
        highlight={true}
        title={
          <span>
            Add new board
            <FaPlus onClick={onSubmitCreateBoard} className="plus-icon" />
          </span>
        }
      >
        <form onSubmit={onSubmitCreateBoard}>
          <div>
            <input
              className="textfield"
              type="text"
              value={name}
              onChange={onChangeInput}
            />
          </div>
        </form>
      </Card>
    </div>
  );
}

export default BoardCreator;
