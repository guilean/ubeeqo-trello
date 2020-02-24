import React, { useState } from "react";

function BoardCreator({ createBoard }) {
  const [name, setName] = useState("");

  const onChangeInput = e => {
    setName(e.target.value);
  };

  const onSubmitCreateBoard = e => {
    createBoard(name);
    setName("");
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmitCreateBoard}>
      <label>
        Name:
        <input type="text" value={name} onChange={onChangeInput} />
      </label>
      <input disabled={name === ""} type="submit" value="Create Board" />
    </form>
  );
}

export default BoardCreator;
