import React from "react";
import Column from "../Column";
import EmptyListV2 from "../../../assets/empty-list-v2.png";

function ColumnList({ data, deleteColumn }) {
  return data.length > 0 ? (
    <ul id="column-list">
      {data.map((column, i) => {
        return (
          <Column index={i} key={i} name={column} deleteColumn={deleteColumn} />
        );
      })}
    </ul>
  ) : (
    <div id="column-empty-list">
      <h3>Help me by adding a new column!</h3>
      <img src={EmptyListV2} alt="Empty list asset" />
    </div>
  );
}

export default ColumnList;
