import {
  CREATE_BOARD_SUCCESS,
  DELETE_BOARD_SUCCESS,
  CREATE_COLUMN_SUCCESS,
  DELETE_COLUMN_SUCCESS
} from "../../actions/types";

const boards = (state = {}, action) => {
  switch (action.type) {
    case CREATE_BOARD_SUCCESS:
      return {
        ...state,
        [action.payload.id]: {
          name: action.payload.name,
          columns: []
        }
      };

    case DELETE_BOARD_SUCCESS:
      let stateCloned = Object.assign({}, state);
      delete stateCloned[action.payload.id];
      return stateCloned;

    case CREATE_COLUMN_SUCCESS:
      return {
        ...state,
        [action.payload.boardId]: {
          ...state[action.payload.boardId],
          columns: state[action.payload.boardId].columns.concat(
            action.payload.columnName
          )
        }
      };

    case DELETE_COLUMN_SUCCESS:
      return {
        ...state,
        [action.payload.boardId]: {
          ...state[action.payload.boardId],
          columns: state[action.payload.boardId].columns.filter(
            (item, index) => index !== action.payload.columnIndex
          )
        }
      };

    default:
      return state;
  }
};

export default boards;
