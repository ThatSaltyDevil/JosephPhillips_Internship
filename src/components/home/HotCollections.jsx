import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";
import $ from "jquery";
import LoadingState from "./LoadingState";

const HotCollections = () => {
  const [collections, setCollections] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
 

  const owlOptions = {
    loop: true,
    margin: 0,
    nav: true,
    dots: true,
    responsive: {
      0: { items: 1 },
      800: { items: 2 },
      1000: { items: 3 },
      1200: { items: 4 },
    },
  };

  async function fetchHotCollections() {
    await axios
      .get(
        "https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections",
      )
      .then((response) => {
        setCollections(response.data);
        setIsLoaded(true);
      })
      .catch((error) => {
        console.error("Error fetching hot collections:", error);
      });
  }

  useEffect(() => {

    fetchHotCollections();

  }, [isLoaded]);

  return (
    <section id="section-collections" className="no-bottom">
      <div className="container ">
        <div className="row">
          <div className="col-lg-13 text-center">
            <div className="text-center">
              <h2>Hot Collections</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          {!isLoaded ? (
                <LoadingState />
          ) : (
            <OwlCarousel className="owl-theme" {...owlOptions}>
              {collections.map((collections, index) => (
                <div className="col-lg-12" key={index}>
                  <div className="nft_coll">
                    <div className="nft_wrap">
                      <Link to="/item-details">
                        <img
                          src={collections.nftImage}
                          className="lazy img-fluid"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="nft_coll_pp">
                      <Link to="/author">
                        <img
                          className="lazy pp-coll"
                          src={collections.authorImage}
                          alt=""
                        />
                      </Link>
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="nft_coll_info">
                      <Link to="/explore">
                        <h4>{collections.title}</h4>
                      </Link>
                      <span>ERC-{collections.code}</span>
                    </div>
                  </div>
                </div>
              ))}
            </OwlCarousel>
          )}
        </div>
      </div>
    </section>
  );
};

export default HotCollections;
