import React from "react";
import Card from "../../common/Card";
import { FaTrash } from "react-icons/fa";

function Column({ name, index, deleteColumn }) {
  return (
    <li className="board-column">
      <Card size={"large"} title={name}>
        <div className="board-column-options">
          <span onClick={e => deleteColumn(e, index)}>
            <FaTrash className="board-column-option-delete" />
          </span>
        </div>
      </Card>
    </li>
  );
}

export default Column;
