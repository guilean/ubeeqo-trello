import {
  CREATE_COLUMN_SUCCESS,
  DELETE_COLUMN_SUCCESS,
  REORDER_COLUMN_SUCCESS
} from "../types";

const createColumnSuccess = ({ boardId, columnName }) => ({
  type: CREATE_COLUMN_SUCCESS,
  payload: {
    boardId,
    columnName
  }
});

const deleteColumnSuccess = ({ boardId, columnIndex }) => ({
  type: DELETE_COLUMN_SUCCESS,
  payload: {
    boardId,
    columnIndex
  }
});

const reorderColumnSuccess = ({ boardId, reorderedColumns }) => ({
  type: REORDER_COLUMN_SUCCESS,
  payload: {
    boardId,
    reorderedColumns
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

export function reorderColumnAction({ boardId, reorderedColumns }) {
  return dispatch => {
    dispatch(reorderColumnSuccess({ boardId, reorderedColumns }));
  };
}
