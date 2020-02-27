import React from "react";
import Creator from "../../common/Creator";

function ColumnCreator({ createColumn }) {
  return (
    <div id="column-creator">
      <Creator
        onSubmitCreate={createColumn}
        placeholder={"Add a new column ✏️"}
      />
    </div>
  );
}

export default ColumnCreator;
