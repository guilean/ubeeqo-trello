import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

function TaskCreator({ createTask }) {
  const [task, setTask] = useState("");

  const onChangeInput = e => {
    setTask(e.target.value);
  };

  const onHandleCreateTask = e => {
    if (task === "") {
      return;
    }
    createTask(task);
    setTask("");
    e.preventDefault();
  };

  return (
    <div className="task-creator">
      <form onSubmit={onHandleCreateTask}>
        <input
          placeholder="Add new task"
          className="textfield"
          type="text"
          value={task}
          onChange={onChangeInput}
        />
      </form>
      <FaPlus onClick={onHandleCreateTask} className="plus-icon" />
    </div>
  );
}

export default TaskCreator;
