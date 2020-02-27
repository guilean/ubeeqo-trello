import React, { useState } from "react";

function Creator({ onSubmitCreate, placeholder }) {
  const [name, setName] = useState("");

  const onChangeInput = e => {
    setName(e.target.value);
  };

  const submitCreate = e => {
    if (name === "") {
      return;
    }
    onSubmitCreate(name);
    setName("");
    e.preventDefault();
  };

  return (
    <div id="creator">
      <form onSubmit={submitCreate}>
        <input
          autoFocus
          placeholder={placeholder}
          className="textfield"
          type="text"
          value={name}
          onChange={onChangeInput}
        />
      </form>
    </div>
  );
}

export default Creator;
