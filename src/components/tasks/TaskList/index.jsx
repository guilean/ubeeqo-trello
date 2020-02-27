import React from "react";
import Task from "../Task";

function TaskList({ data, deleteTask }) {
  return (
    data.length > 0 &&
    data
      .map((task, i) => (
        <Task key={i} index={i} name={task.name} deleteTask={deleteTask} />
      ))
      .reverse()
  );
}

export default TaskList;
