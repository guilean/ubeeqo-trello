import React from "react";

function Board({ name, id, deleteBoard }) {
  return (
    <span>
      {name}
      <span onClick={() => deleteBoard(id)}>X</span>
    </span>
  );
}

export default Board;
