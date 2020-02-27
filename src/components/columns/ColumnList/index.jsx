import React from "react";
import Column from "../Column";
import EmptyListV2 from "../../../assets/empty-list-v2.png";
import { reorder } from "../../../utils";
import EmptyList from "../../common/EmptyList";
import DragDrop from "../../common/DragDrop";
import Draggable from "../../common/Draggable";

function ColumnList({ data, deleteColumn, reorderColumn }) {
  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    const reorderedColumns = reorder(
      data,
      result.source.index,
      result.destination.index
    );
    reorderColumn(reorderedColumns);
  }

  return data.length > 0 ? (
    <div id="column-list">
      <DragDrop onDragEnd={onDragEnd}>
        {data.map((column, i) => (
          <Draggable key={i} index={i}>
            <Column
              index={i}
              key={i}
              name={column.name}
              deleteColumn={deleteColumn}
            />
          </Draggable>
        ))}
      </DragDrop>
    </div>
  ) : (
    <EmptyList asset={EmptyListV2} />
  );
}

export default ColumnList;
