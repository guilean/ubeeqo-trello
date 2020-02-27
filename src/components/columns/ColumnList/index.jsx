import React from "react";
import Column from "../Column";
import EmptyListV2 from "../../../assets/empty-list-v2.png";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { reorder } from "../../../utils";

function ColumnList({ data, deleteColumn, reorderColumns }) {
  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    const reorderedColumns = reorder(
      data,
      result.source.index,
      result.destination.index
    );
    reorderColumns(reorderedColumns);
  }

  const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: "none",
    padding: 0,
    margin: 0,
    outline: "none",
    ...draggableStyle
  });

  const getListStyle = isDraggingOver => ({
    display: "flex",
    paddinsg: 0,
    paddingBottom: "20px",
    overflow: "auto"
  });

  return data.length > 0 ? (
    <div id="column-list">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable
          droppableId="columns-dropable"
          type="column"
          direction="horizontal"
        >
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
              {...provided.droppableProps}
            >
              {data.map((column, i) => (
                <Draggable
                  key={i}
                  draggableId={`column-draggable-${i}`}
                  index={i}
                >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      <Column
                        index={i}
                        key={i}
                        name={column.name}
                        deleteColumn={deleteColumn}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  ) : (
    <div id="column-empty-list">
      <img src={EmptyListV2} alt="Empty list asset" />
    </div>
  );
}

export default ColumnList;
