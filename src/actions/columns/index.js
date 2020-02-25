import { CREATE_COLUMN_SUCCESS, DELETE_COLUMN_SUCCESS } from "../types";

export const createColumnSuccess = ({ boardId, columnName }) => ({
  type: CREATE_COLUMN_SUCCESS,
  payload: {
    boardId,
    columnName
  }
});

export const deleteColumnSuccess = ({ boardId, columnIndex }) => ({
  type: DELETE_COLUMN_SUCCESS,
  payload: {
    boardId,
    columnIndex
  }
});

export function createColumnAction({ boardId, columnName }) {
  return dispatch => {
    dispatch(createColumnSuccess({ boardId, columnName }));
  };
}

export function deleteColumnAction({ boardId, columnIndex }) {
  return dispatch => {
    dispatch(deleteColumnSuccess({ boardId, columnIndex }));
  };
}
