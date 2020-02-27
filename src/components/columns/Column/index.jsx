import React from "react";
import { FaTrash } from "react-icons/fa";
import TaskContainer from "../../../containers/tasks/TasksContainer";

function Column({ name, index, deleteColumn }) {
  return (
    <div className="board-column">
      <div className="column-header">
        <span className="column-name">{name}</span>
        <div className="column-options">
          <span onClick={e => deleteColumn(e, index)}>
            <FaTrash className="column-option-delete" />
          </span>
        </div>
      </div>
      <div className="column-body">
        <TaskContainer columnIndex={index} />
      </div>
    </div>
  );
}

export default Column;
