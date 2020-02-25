import {
  CREATE_BOARD_SUCCESS,
  DELETE_BOARD_SUCCESS
} from "../../actions/types";

const boards = (state = {}, action) => {
  switch (action.type) {
    case CREATE_BOARD_SUCCESS:
      return {
        ...state,
        [action.payload.id]: {
          name: action.payload.name
        }
      };
    case DELETE_BOARD_SUCCESS:
      let stateCloned = Object.assign({}, state);
      delete stateCloned[action.payload.id];
      return stateCloned;
    default:
      return state;
  }
};

export default boards;
