import React from "react";
import { Draggable as DraggableItem } from "react-beautiful-dnd";

function Draggable({ index, children }) {
  const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: "none",
    padding: 0,
    margin: 0,
    outline: "none",
    ...draggableStyle
  });

  return (
    <DraggableItem draggableId={`column-draggable-${index}`} index={index}>
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
          {children}
        </div>
      )}
    </DraggableItem>
  );
}

export default Draggable;
