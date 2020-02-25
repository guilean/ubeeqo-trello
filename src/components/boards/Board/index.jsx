import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Board() {
  let { boardId } = useParams();
  const board = useSelector(state => state.boards[boardId]);
  return <span>Soy el board {board.name}</span>;
}

export default Board;
