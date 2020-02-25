import React, { useCallback } from "react";
import { createBoardAction, deleteBoardAction } from "../../actions/boards";
import { useSelector, useDispatch } from "react-redux";
import BoardList from "../../components/boards/BoardList";

function BoardsContainer() {
  const boards = useSelector(state => state.boards);
  const dispatch = useDispatch();

  const createBoard = useCallback(name => dispatch(createBoardAction(name)), [
    dispatch
  ]);

  const deleteBoard = useCallback(
    (event, id) => {
      event.preventDefault();
      dispatch(deleteBoardAction(id));
    },
    [dispatch]
  );

  return (
    <main>
      <div className="container">
        <BoardList
          createBoard={createBoard}
          deleteBoard={deleteBoard}
          data={boards}
        />
      </div>
    </main>
  );
}

export default BoardsContainer;
