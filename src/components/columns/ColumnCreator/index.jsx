import React, { useState } from "react";
import Card from "../../common/Card";
import { FaPlus } from "react-icons/fa";

function ColumnCreator({ createColumn }) {
  const [name, setName] = useState("");

  const onChangeInput = e => {
    setName(e.target.value);
  };

  const onSubmitCreateColumn = e => {
    if (name === "") {
      return;
    }
    createColumn(name);
    setName("");
    e.preventDefault();
  };

  return (
    <div id="column-creator">
      <Card
        highlight={true}
        title={
          <span>
            Add column
            <FaPlus onClick={onSubmitCreateColumn} className="plus-icon" />
          </span>
        }
      >
        <form onSubmit={onSubmitCreateColumn}>
          <div>
            <input
              className="textfield"
              type="text"
              value={name}
              onChange={onChangeInput}
            />
          </div>
        </form>
      </Card>
    </div>
  );
}

export default ColumnCreator;
