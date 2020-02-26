import React from "react";
import BoardCard from "../BoardCard";
import { isEmpty } from "../../../utils";
import EmptyListAsset from "../../../assets/empty-list.png";

function BoardList({ data, deleteBoard }) {
  const hasData = !isEmpty(data);
  return hasData ? (
    <ul id="board-list">
      {Object.entries(data)
        .map(([boardId, value]) => {
          return (
            <li key={boardId}>
              <BoardCard board={value} id={boardId} deleteBoard={deleteBoard} />
            </li>
          );
        })
        .reverse()}
    </ul>
  ) : (
    <div id="board-empty-list">
      <img src={EmptyListAsset} alt="Empty list asset" />
    </div>
  );
}

export default BoardList;
