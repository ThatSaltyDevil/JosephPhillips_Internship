import React from "react";

const ItemsLoadingState = () => {
  return (
    <div className="row">
      <div className="col-md-6 text-center">
        <div
          className="img-fluid img-rounded mb-sm-30 nft-image skeleton-box"
          alt=""
        />
      </div>
      <div className="col-md-6">
        <div className="item_info">
          <h2 className="skeleton-box"></h2>
          <div className="item_info_counts">
            <div className="item_info_views skeleton-box"></div>
            <div className="item_info_like skeleton-box"></div>
          </div>
          <div className=" item_description skeleton-box"></div>
          <div className="item_author">
            <div className="author_list_pp skeleton-box"></div>
          </div>
        <div className="item_author">
          <div className="author_list_pp skeleton-box"></div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ItemsLoadingState;
