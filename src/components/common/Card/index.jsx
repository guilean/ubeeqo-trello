import React from "react";

function Card({ title, children, highlight }) {
  const isHighlighted = highlight ? "highlight" : "regular";
  return (
    <div className={`card ${isHighlighted}`}>
      <label className="card-title">{title}</label>
      {children}
    </div>
  );
}

export default Card;
