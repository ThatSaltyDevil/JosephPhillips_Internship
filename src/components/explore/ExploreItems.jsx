import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CountdownTimer from "../home/CountdownTimer";
import LoadingState2 from "../home/LoadingState2";

const ExploreItems = () => {
  const [exploreItems, setExploreItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleItems, setVisibleItems] = useState(8);
  const [sortOption, setSortOption] = useState("");
  const [sortedItems, setSortedItems] = useState([])

  async function fetchExploreItems() {
    await axios
      .get("https://us-central1-nft-cloud-functions.cloudfunctions.net/explore")
      .then((response) => {
        setExploreItems(response.data);
        setIsLoaded(true);
      })
      .catch((error) => {
        console.error("Error fetching explore items:", error);
      });
  }

  async function fetchSortedItems(sortOption) {
    await axios.get(
      `https://us-central1-nft-cloud-functions.cloudfunctions.net/explore?filter=${sortOption}`
    .then((response) => {
        setSortedItems(response.data);

      })
      .catch((error) => {
        console.error("Error fetching explore items:", error);
      }))

  }

  useEffect(() => {
    if (!isLoaded) {
      fetchExploreItems();
    }
    console.log(exploreItems);
  }, []);

  

  const showMoreItems = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 4);
  };

  return (
    <>
      <div>
        <select id="filter-items" defaultValue="">
          <option value="">Default</option>
          <option value="price_low_to_high">Price, Low to High</option>
          <option value="price_high_to_low">Price, High to Low</option>
          <option value="likes_high_to_low">Most liked</option>
        </select>
      </div>
      {!isLoaded ? (
        <>
        <LoadingState2 />
        <LoadingState2 />
        </>
      ) : (
        exploreItems.slice(0, visibleItems).map((exploreItem, index) => (
          <div
            key={index}
            className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
            style={{ display: "block", backgroundSize: "cover" }}
          >
            <div className="nft__item">
              <div className="author_list_pp">
                <Link
                  to={`/author/${exploreItem.authorId}`}
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                >
                  <img className="lazy" src={exploreItem.authorImage} alt="" />
                  <i className="fa fa-check"></i>
                </Link>
              </div>
              {exploreItem.expiryDate && (
                <CountdownTimer expiryDate={exploreItem.expiryDate} />
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
                <Link to={`/item-details/${exploreItem.nftId}`}>
                  <img
                    src={exploreItem.nftImage}
                    className="lazy nft__item_preview"
                    alt=""
                  />
                </Link>
              </div>
              <div className="nft__item_info">
                <Link to={`/item-details/${exploreItem.id}`}>
                  <h4>{exploreItem.name}</h4>
                </Link>
                <div className="nft__item_price">{exploreItem.price} ETH</div>
                <div className="nft__item_like">
                  <i className="fa fa-heart"></i>
                  <span>{exploreItem.likes}</span>
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
    </>
  );
};

export default ExploreItems;
