import React from "react";
function EmptyList({ asset }) {
  return (
    <div className="empty-list">
      <img src={asset} alt="Empty list asset" />
    </div>
  );
}
export default EmptyList;
