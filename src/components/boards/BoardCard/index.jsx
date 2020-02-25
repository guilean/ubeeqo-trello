import React from "react";
import Card from "../../common/Card";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

function BoardCard({ board, id, deleteBoard }) {
  return (
    <div className="board-card">
      <Link to={`/board/${id}`}>
        <Card key={id} title={board.name}>
          <div className="card-options">
            <span onClick={e => deleteBoard(e, id)}>
              <FaTrash className="card-option-delete" />
            </span>
          </div>
        </Card>
      </Link>
    </div>
  );
}

export default BoardCard;
