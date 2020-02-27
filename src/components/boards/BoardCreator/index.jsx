import React from "react";
import Creator from "../../common/Creator";

function BoardCreator({ createBoard }) {
  return (
    <div id="board-creator">
      <Creator
        onSubmitCreate={createBoard}
        placeholder={"Add a new board ✏️"}
      />
    </div>
  );
}

export default BoardCreator;
