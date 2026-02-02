import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";

const LoadingState = () => {
  return (
    <div className="loading__container">
      <div className="col-lg-3">
        <div className="nft_coll">
          <div className="nft_wrap">
            <div className="skeleton-box nft-image"></div>
          </div>
          <div className="nft_coll_pp">
            <div className="skeleton__pp-coll skeleton-box"></div>
            <i className="fa fa-check"></i>
          </div>
          <div className="nft_coll_info">
            <span
              className="skeleton-box"
              style={{ width: "80px", height: "15px" }}
            ></span>{" "}
            <br />
            <span
              className="skeleton-box"
              style={{ width: "50px", height: "15px" }}
            ></span>
          </div>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="nft_coll">
          <div className="nft_wrap">
            <div className="skeleton-box nft-image"></div>
          </div>
          <div className="nft_coll_pp">
            <div className="skeleton__pp-coll skeleton-box"></div>
            <i className="fa fa-check"></i>
          </div>
          <div className="nft_coll_info">
            <span
              className="skeleton-box"
              style={{ width: "80px", height: "15px" }}
            ></span>{" "}
            <br />
            <span
              className="skeleton-box"
              style={{ width: "50px", height: "15px" }}
            ></span>
          </div>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="nft_coll">
          <div className="nft_wrap">
            <div className="skeleton-box nft-image"></div>
          </div>
          <div className="nft_coll_pp">
            <div className="skeleton__pp-coll skeleton-box"></div>
            <i className="fa fa-check"></i>
          </div>
          <div className="nft_coll_info">
            <span
              className="skeleton-box"
              style={{ width: "80px", height: "15px" }}
            ></span>{" "}
            <br />
            <span
              className="skeleton-box"
              style={{ width: "50px", height: "15px" }}
            ></span>
          </div>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="nft_coll">
          <div className="nft_wrap">
            <div className="skeleton-box nft-image"></div>
          </div>
          <div className="nft_coll_pp">
            <div className="skeleton__pp-coll skeleton-box"></div>
            <i className="fa fa-check"></i>
          </div>
          <div className="nft_coll_info">
            <span
              className="skeleton-box"
              style={{ width: "80px", height: "15px" }}
            ></span>{" "}
            <br />
            <span
              className="skeleton-box"
              style={{ width: "50px", height: "15px" }}
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoadingState;
