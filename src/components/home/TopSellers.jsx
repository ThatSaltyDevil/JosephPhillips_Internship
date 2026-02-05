import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import axios from "axios";
import LoadingStateTopList from "./LoadingStateTopList";

const TopSellers = () => {
  const [topSellers, setTopSellers] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  async function fetchTopSellers() {
    await axios
      .get(
        "https://us-central1-nft-cloud-functions.cloudfunctions.net/topSellers",
      )
      .then((response) => {
        setTopSellers(response.data);
        setIsLoaded(true);
      })
      .catch((error) => {
        console.error("Error fetching top sellers:", error);
      });
  }

  useEffect(() => {
    if (!isLoaded) {
      fetchTopSellers();
    }
  }, []);

  return (
    <section id="section-popular" className="pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Top Sellers</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <div className="col-md-12">
            <ol className="author_list">
              {topSellers.map((seller, index) =>
                !isLoaded ? (
                  <LoadingStateTopList key={index} />
                ) : (
                  <li key={index}>
                    <div className="author_list_pp">
                      <Link to={`/author/${seller.authorId}`}>
                        <img
                          className="lazy pp-author"
                          src={seller.authorImage}
                          alt=""
                        />
                        <i className="fa fa-check"></i>
                      </Link>
                    </div>
                    <div className="author_list_info">
                      <Link to={`/author/${seller.authorId}`}>
                        {seller.authorName}
                      </Link>
                      <span>{seller.price} ETH</span>
                    </div>
                  </li>
                ),
              )}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSellers;
