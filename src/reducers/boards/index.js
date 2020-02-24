import {
  CREATE_BOARD_SUCCESS,
  DELETE_BOARD_SUCCESS
} from "../../actions/types";

const boards = (state = [], action) => {
  switch (action.type) {
    case CREATE_BOARD_SUCCESS:
      return [
        ...state,
        {
          name: action.payload.name,
          id: action.payload.id
        }
      ];
    case DELETE_BOARD_SUCCESS:
      return state.filter(board => board.id !== action.payload.id);
    default:
      return state;
  }
};
export default boards;
