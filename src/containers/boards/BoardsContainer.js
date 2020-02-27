import React, { useCallback } from "react";
import { createBoardAction, deleteBoardAction } from "../../actions/boards";
import { useSelector, useDispatch } from "react-redux";
import BoardList from "../../components/boards/BoardList";
import BoardCreator from "../../components/boards/BoardCreator";

function BoardsContainer() {
  const boards = useSelector(state => {
    return state.boards;
  });
  const dispatch = useDispatch();

  const createBoard = useCallback(
    boardName => dispatch(createBoardAction({ boardName })),
    [dispatch]
  );

  const deleteBoard = useCallback(
    (event, boardId) => {
      event.preventDefault();
      dispatch(deleteBoardAction({ boardId }));
    },
    [dispatch]
  );

  return (
    <main>
      <div id="boards-container" className="container">
        <BoardCreator createBoard={createBoard} />
        <BoardList deleteBoard={deleteBoard} data={boards} />
      </div>
    </main>
  );
}

export default BoardsContainer;
