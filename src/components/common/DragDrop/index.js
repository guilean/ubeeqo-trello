import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

function DragDrop({ onDragEnd, children }) {
  const getListStyle = isDraggingOver => ({
    display: "flex",
    paddinsg: 0,
    paddingBottom: "20px",
    overflow: "auto"
  });

  return (
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
            {children}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default DragDrop;
