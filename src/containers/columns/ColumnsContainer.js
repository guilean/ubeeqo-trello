import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  createColumnAction,
  deleteColumnAction,
  reorderColumnAction
} from "../../actions/columns";
import ColumnCreator from "../../components/columns/ColumnCreator";
import ColumnList from "../../components/columns/ColumnList";

function ColumnsContainer() {
  let { boardId } = useParams();
  const dispatch = useDispatch();
  const columns = useSelector(state => state.boards[boardId].columns);

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

  const reorderColumns = useCallback(
    reorderedColumns =>
      dispatch(reorderColumnAction({ boardId, reorderedColumns })),
    [boardId, dispatch]
  );

  return (
    <main>
      <div className="container">
        <ColumnCreator createColumn={createColumn} />
        <ColumnList
          reorderColumns={reorderColumns}
          deleteColumn={deleteColumn}
          data={columns}
        />
      </div>
    </main>
  );
}

export default ColumnsContainer;
