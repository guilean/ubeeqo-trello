import { CREATE_BOARD_SUCCESS, DELETE_BOARD_SUCCESS } from "../types";

let id = 0;

export const createBoardSuccess = name => ({
  type: CREATE_BOARD_SUCCESS,
  payload: {
    id: id++,
    name
  }
});

export const deleteBoardSuccess = id => ({
  type: DELETE_BOARD_SUCCESS,
  payload: {
    id
  }
});

export function createBoardAction(boardName) {
  return dispatch => {
    dispatch(createBoardSuccess(boardName));
  };
}

export function deleteBoardAction(boardName) {
  return dispatch => {
    dispatch(deleteBoardSuccess(boardName));
  };
}
