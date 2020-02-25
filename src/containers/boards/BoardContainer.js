import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { createColumnAction, deleteColumnAction } from "../../actions/columns";
import ColumnCreator from "../../components/columns/ColumnCreator";
import ColumnList from "../../components/columns/ColumnList";

function BoardContainer() {
  let { boardId } = useParams();
  const dispatch = useDispatch();
  const board = useSelector(state => state.boards[boardId]);

  const createColumn = useCallback(
    columnName => dispatch(createColumnAction({ boardId, columnName })),
    [boardId, dispatch]
  );

  const deleteColumn = useCallback(
    (event, columnIndex) => {
      event.preventDefault();
      dispatch(deleteColumnAction({ boardId, columnIndex }));
    },
    [boardId, dispatch]
  );

  return (
    <main>
      <div className="container">
        <ColumnCreator createColumn={createColumn} />
        <ColumnList deleteColumn={deleteColumn} data={board.columns} />
      </div>
    </main>
  );
}

export default BoardContainer;
