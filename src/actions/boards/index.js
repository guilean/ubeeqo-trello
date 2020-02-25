import { CREATE_BOARD_SUCCESS, DELETE_BOARD_SUCCESS } from "../types";
import { generateId } from "../../utils";

export const createBoardSuccess = name => ({
  type: CREATE_BOARD_SUCCESS,
  payload: {
    id: generateId(),
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
