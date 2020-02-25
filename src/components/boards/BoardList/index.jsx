import React from "react";
import Board from "../Board";

function BoardList({ data, deleteBoard }) {
  const hasData = data.length > 0;
  if (hasData) {
    return (
      <ul>
        {data.map((board, i) => {
          const { name, id } = board;
          return (
            <Board key={i} deleteBoard={deleteBoard} id={id} name={name} />
          );
        })}
      </ul>
    );
  } else {
    return <span>empty case</span>;
  }
}

export default BoardList;