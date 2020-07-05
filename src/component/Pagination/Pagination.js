import React from "react";

import "./Pagination.scss";

function Pagination({ currentPage, pageChange }) {
  return (
    <div className="feed-pagination">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <button
              className="page-link"
              onClick={() => pageChange(1)}
              disabled={currentPage === 1}
            >
              1
            </button>
          </li>
          <li className="page-item">
            <button
              className="page-link"
              onClick={() => pageChange(2)}
              disabled={currentPage === 2}
            >
              2
            </button>
          </li>
          <li className="page-item">
            <button
              className="page-link"
              onClick={() => pageChange(3)}
              disabled={currentPage === 3}
            >
              3
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
