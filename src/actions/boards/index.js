import { CREATE_BOARD_SUCCESS, DELETE_BOARD_SUCCESS } from "../types";
import { generateId } from "../../utils";

const createBoardSuccess = ({ boardName }) => ({
  type: CREATE_BOARD_SUCCESS,
  payload: {
    boardId: generateId(),
    boardName
  }
});

const deleteBoardSuccess = ({ boardId }) => ({
  type: DELETE_BOARD_SUCCESS,
  payload: {
    boardId
  }
});

export function createBoardAction({ boardName }) {
  return dispatch => {
    dispatch(createBoardSuccess({ boardName }));
  };
}

export function deleteBoardAction({ boardId }) {
  return dispatch => {
    dispatch(deleteBoardSuccess({ boardId }));
  };
}
