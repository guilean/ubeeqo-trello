import React from "react";

function Card({ title, children, highlight, size }) {
  const isHighlighted = highlight ? "highlight" : "regular";

  return (
    <div className={`card ${isHighlighted} ${size}`}>
      <label className="card-title">{title}</label>
      {children}
    </div>
  );
}

export default Card;
