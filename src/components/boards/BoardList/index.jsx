import React from "react";
import BoardCard from "../BoardCard";
import { isEmpty } from "../../../utils";
import EmptyListAsset from "../../../assets/empty-list.png";
import EmptyList from "../../common/EmptyList";

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
    <EmptyList asset={EmptyListAsset} />
  );
}

export default BoardList;
