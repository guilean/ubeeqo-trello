import React, { useCallback } from "react";
import { createBoardAction, deleteBoardAction } from "../../actions/boards";
import { useSelector, useDispatch } from "react-redux";
import BoardList from "../../components/boards/BoardList";
import BoardCreator from "../../components/boards/BoardCreator";

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
        <BoardCreator createBoard={createBoard} />
        <BoardList deleteBoard={deleteBoard} data={boards} />
      </div>
    </main>
  );
}

export default BoardsContainer;
