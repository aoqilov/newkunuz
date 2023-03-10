import React from "react";
import "../../src/style/component/loading.scss";

function Loading() {
  return (
    <div className="cmp-loading" aria-label="loading">
      <svg
        className="cmp-loading__spinner"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx={50}
          cy={50}
          r={14.5}
          className="cmp-loading__track"
        ></circle>
        <circle cx={50} cy={50} r={14.5} className="cmp-loading__tail"></circle>
      </svg>
    </div>
  );
}

export default Loading;
