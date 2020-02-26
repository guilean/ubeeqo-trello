import {
  CREATE_BOARD_SUCCESS,
  DELETE_BOARD_SUCCESS,
  CREATE_COLUMN_SUCCESS,
  DELETE_COLUMN_SUCCESS,
  REORDER_COLUMN_SUCCESS,
  CREATE_TASK_SUCCESS,
  DELETE_TASK_SUCCESS
} from "../../actions/types";

const boards = (state = {}, action) => {
  switch (action.type) {
    case CREATE_BOARD_SUCCESS: {
      const { boardName, boardId } = action.payload;
      return {
        ...state,
        [boardId]: {
          name: boardName,
          columns: []
        }
      };
    }

    case DELETE_BOARD_SUCCESS: {
      const { boardId } = action.payload;
      let stateCloned = Object.assign({}, state);
      delete stateCloned[boardId];
      return stateCloned;
    }

    case CREATE_COLUMN_SUCCESS: {
      const { boardId, columnName } = action.payload;
      return {
        ...state,
        [boardId]: {
          ...state[boardId],
          columns: state[boardId].columns.concat({
            name: columnName,
            tasks: []
          })
        }
      };
    }

    case DELETE_COLUMN_SUCCESS: {
      const { boardId, columnIndex } = action.payload;
      return {
        ...state,
        [boardId]: {
          ...state[boardId],
          columns: state[boardId].columns.filter(
            (item, index) => index !== columnIndex
          )
        }
      };
    }

    case REORDER_COLUMN_SUCCESS: {
      const { boardId, reorderedColumns } = action.payload;
      return {
        ...state,
        [boardId]: {
          ...state[boardId],
          columns: reorderedColumns
        }
      };
    }

    case CREATE_TASK_SUCCESS: {
      const { columnIndex, boardId, taskName } = action.payload;
      let newState = { ...state };
      newState[boardId].columns[columnIndex].tasks = state[boardId].columns[
        columnIndex
      ].tasks.concat({ name: taskName });
      return {
        ...state,
        ...newState
      };
    }

    case DELETE_TASK_SUCCESS: {
      const { columnIndex, boardId, taskIndex } = action.payload;
      let newState = { ...state };
      newState[boardId].columns[columnIndex].tasks = state[boardId].columns[
        columnIndex
      ].tasks.filter((item, index) => index !== taskIndex);
      return {
        ...state,
        ...newState
      };
    }
    default:
      return state;
  }
};

export default boards;
