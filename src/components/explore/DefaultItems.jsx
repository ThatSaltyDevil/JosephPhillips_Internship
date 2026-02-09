import React, { useEffect, useState } from "react";
import axios from "axios";
import LoadingState2 from "../home/LoadingState2";
import { Link } from "react-router-dom";
import CountdownTimer from "../home/CountdownTimer";

const DefaultItems = () => {
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleItems, setVisibleItems] = useState(8);

  async function fetchExploreItems() {
    await axios
      .get("https://us-central1-nft-cloud-functions.cloudfunctions.net/explore")
      .then((response) => {
        setItems(response.data);
        setIsLoaded(true);
      })
      .catch((error) => {
        console.error("Error fetching explore items:", error);
      });
  }
  useEffect(() => {
    if (!isLoaded) {
      fetchExploreItems();
    }
  }, []);

  const showMoreItems = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 4);
  };
  return (
    <div className="items__container">
      {!isLoaded ? (
        <>
          <LoadingState2 />
          <LoadingState2 />
        </>
      ) : (
        items.slice(0, visibleItems).map((item, index) => (
          <div
            key={index}
            className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
            style={{ display: "block", backgroundSize: "cover" }}
          >
            <div className="nft__item">
              <div className="author_list_pp">
                <Link
                  to={`/author/${item.authorId}`}
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                >
                  <img className="lazy" src={item.authorImage} alt="" />
                  <i className="fa fa-check"></i>
                </Link>
              </div>
              {item.expiryDate && (
                <CountdownTimer expiryDate={item.expiryDate} />
              )}

              <div className="nft__item_wrap">
                <div className="nft__item_extra">
                  <div className="nft__item_buttons">
                    <button>Buy Now</button>
                    <div className="nft__item_share">
                      <h4>Share</h4>
                      <a href="" target="_blank" rel="noreferrer">
                        <i className="fa fa-facebook fa-lg"></i>
                      </a>
                      <a href="" target="_blank" rel="noreferrer">
                        <i className="fa fa-twitter fa-lg"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-envelope fa-lg"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <Link to={`/item-details/${item.nftId}`}>
                  <img
                    src={item.nftImage}
                    className="lazy nft__item_preview"
                    alt=""
                  />
                </Link>
              </div>
              <div className="nft__item_info">
                <Link to={`/item-details/${item.id}`}>
                  <h4>{item.name}</h4>
                </Link>
                <div className="nft__item_price">{item.price} ETH</div>
                <div className="nft__item_like">
                  <i className="fa fa-heart"></i>
                  <span>{item.likes}</span>
                </div>
              </div>
            </div>
          </div>
        ))
      )}

      <div className="col-md-12 text-center">
        <Link
          to=""
          id="loadmore"
          className="btn-main lead"
          onClick={showMoreItems}
        >
          Load more
        </Link>
      </div>
    </div>
  );
};

export default DefaultItems;
