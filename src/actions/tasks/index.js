import { CREATE_TASK_SUCCESS, DELETE_TASK_SUCCESS } from "../types";

const createTaskSuccess = ({ boardId, columnIndex, taskName }) => ({
  type: CREATE_TASK_SUCCESS,
  payload: {
    boardId,
    columnIndex,
    taskName
  }
});

const deleteTaskSuccess = ({ boardId, columnIndex, taskIndex }) => ({
  type: DELETE_TASK_SUCCESS,
  payload: {
    boardId,
    columnIndex,
    taskIndex
  }
});

export function createTaskAction({ boardId, columnIndex, taskName }) {
  return dispatch => {
    dispatch(createTaskSuccess({ boardId, columnIndex, taskName }));
  };
}

export function deleteTaskAction({ boardId, columnIndex, taskIndex }) {
  return dispatch => {
    dispatch(deleteTaskSuccess({ boardId, columnIndex, taskIndex }));
  };
}
