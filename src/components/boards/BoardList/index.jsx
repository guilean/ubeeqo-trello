import React, { Fragment } from "react";
import BoardCard from "../BoardCard";
import { isEmpty } from "../../../utils";
import BoardCreator from "../BoardCreator";
import EmptyListAsset from "../../../assets/empty-list.png";

function BoardList({ data, createBoard, deleteBoard }) {
  const hasData = !isEmpty(data);
  return (
    <Fragment>
      {hasData ? (
        <ul id="board-list">
          {Object.entries(data)
            .map(([boardId, value]) => {
              return (
                <li key={boardId}>
                  <BoardCard
                    board={value}
                    id={boardId}
                    deleteBoard={deleteBoard}
                  />
                </li>
              );
            })
            .reverse()}
        </ul>
      ) : (
        <EmptyList />
      )}
      <BoardCreator createBoard={createBoard} />
    </Fragment>
  );
}

export default BoardList;

function EmptyList() {
  return (
    <div id="board-empty-list">
      <h3>Do me a favour and add a new board</h3>
      <img src={EmptyListAsset} alt="Empty list asset" />
    </div>
  );
}
