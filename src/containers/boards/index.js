import React, { useCallback } from "react";
import { createBoardAction, deleteBoardAction } from "../../actions/boards";
import { useSelector, useDispatch } from "react-redux";
import BoardList from "../../components/boards/BoardList";
import BoardCreator from "../../components/boards/BoardCreator";

function Boards() {
  const boards = useSelector(state => state.boards);
  const dispatch = useDispatch();

  const createBoard = useCallback(name => dispatch(createBoardAction(name)), [
    dispatch
  ]);

  const deleteBoard = useCallback(name => dispatch(deleteBoardAction(name)), [
    dispatch
  ]);

  return (
    <main>
      <h1>Ubeeqo Trello</h1>
      <BoardCreator createBoard={createBoard} />
      <BoardList deleteBoard={deleteBoard} data={boards} />
    </main>
  );
}

export default Boards;
