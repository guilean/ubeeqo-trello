import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { createTaskAction, deleteTaskAction } from "../../actions/tasks";
import TaskCreator from "../../components/tasks/TaskCreator";
import TaskList from "../../components/tasks/TaskList";

function TasksContainer({ columnIndex }) {
  let { boardId } = useParams();
  const dispatch = useDispatch();
  const tasks = useSelector(
    state => state.boards[boardId].columns[columnIndex].tasks
  );

  const createTask = useCallback(
    taskName => dispatch(createTaskAction({ boardId, columnIndex, taskName })),
    [boardId, columnIndex, dispatch]
  );

  const deleteTask = useCallback(
    (event, taskIndex) => {
      event.preventDefault();
      dispatch(deleteTaskAction({ boardId, columnIndex, taskIndex }));
    },
    [boardId, columnIndex, dispatch]
  );

  return (
    <>
      <TaskList
        columnIndex={columnIndex}
        deleteTask={deleteTask}
        data={tasks}
      />
      <TaskCreator createTask={createTask} />
    </>
  );
}

export default TasksContainer;
