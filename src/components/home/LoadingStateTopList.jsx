import React from "react";

const LoadingStateTopList = () => {
  return (

      <li className="loading-state__list">
        <div className="author_list_pp">
          <div className="pp-author skeleton-box"></div>

          <i className="fa fa-check"></i>
        </div>
        <div
          className="author_list_info"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <span
            className="skeleton-box"
            style={{ width: "72px", height: "16px", marginBottom: "6px" }}
          ></span>
          <span
            className="skeleton-box"
            style={{ width: "32px", height: "16px" }}
          ></span>
        </div>
      </li>

  );
};

export default LoadingStateTopList;
