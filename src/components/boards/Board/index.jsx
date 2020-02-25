import React from "react";
import { FaTrash } from "react-icons/fa";
function Board({ name, id, deleteBoard }) {
  return (
    <li className="board">
      <label className="board-name">{name}</label>
      <div className="board-options">
        <span onClick={() => deleteBoard(id)}>
          <FaTrash className="board-option-delete" />
        </span>
      </div>
    </li>
  );
}

export default Board;
